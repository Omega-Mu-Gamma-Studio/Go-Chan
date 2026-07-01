/**
 * GoHighlighter.js
 *
 * Zero-dependency Go tokenizer for Go-chan.
 * Returns an HTML string with <span class="token-*"> wrappers.
 * Used by CodeBlock.jsx.
 *
 * Token classes:
 *   token-keyword     → blue   (if, for, func, return, etc.)
 *   token-type        → teal   (int, string, error, bool, etc.)
 *   token-string      → green  (interpreted "strings", raw `strings`, and rune literals)
 *   token-comment     → gray   (// and block comments)
 *   token-number      → orange (integers, floats, hex, octal, binary, imaginary)
 *   token-method      → pink   (identifier immediately followed by '(')
 *   token-preprocessor→ purple (package / import lines — Go's closest analog)
 *   token-class-name  → yellow (exported PascalCase identifiers — Go's own convention)
 *   token-operator    → red    (:=, <-, ==, &&, <<, etc.)
 */

// --- Go reserved keywords (all 25) ---
const KEYWORDS = new Set([
  'break','case','chan','const','continue',
  'default','defer',
  'else',
  'fallthrough','for','func',
  'go','goto',
  'if','import','interface',
  'map',
  'package',
  'range','return',
  'select','struct','switch',
  'type',
  'var',
]);

// --- Go built-in types and predeclared identifiers ---
const TYPES = new Set([
  // Primitives
  'bool','string',
  'int','int8','int16','int32','int64',
  'uint','uint8','uint16','uint32','uint64','uintptr',
  'byte','rune',
  'float32','float64',
  'complex64','complex128',
  'error','any',
  // Common stdlib types (unqualified usage, e.g. after a dot or import alias)
  'Context','Reader','Writer','Closer','Handler','ResponseWriter','Request',
  'WaitGroup','Mutex','RWMutex','Builder','Buffer',
  // Predeclared functions/constants — highlighted like types for visual consistency
  'true','false','nil','iota',
  'len','cap','make','new','append','copy','delete','panic','recover','print','println','close',
]);

// --- Operators worth highlighting (Go has no ::, ->, but does have :=, <-) ---
const OPERATOR_REGEX = /^(:=|<-|\+\+|--|&\^=?|<<=?|>>=?|&&|\|\||==|!=|<=|>=|[+\-*/%&|^~!<>=]=?)/;

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function tokenize(line) {
  let result = '';
  let i = 0;
  const len = line.length;

  while (i < len) {

    // ── Block comment opening /* (handle multiline state externally if needed) ──
    if (line[i] === '/' && line[i + 1] === '*') {
      let end = i + 2;
      while (end < len - 1 && !(line[end] === '*' && line[end + 1] === '/')) end++;
      end = Math.min(end + 2, len);
      result += `<span class="token-comment">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Single-line comment // ──
    if (line[i] === '/' && line[i + 1] === '/') {
      result += `<span class="token-comment">${escapeHtml(line.slice(i))}</span>`;
      break;
    }

    // ── package / import lines (Go's closest analog to a preprocessor directive) ──
    if ((i === 0 || /\s/.test(line[i - 1])) &&
        (line.slice(i, i + 8) === 'package ' || line.slice(i, i + 7) === 'import ')) {
      const word = line.slice(i, i + 7) === 'import ' ? 'import' : 'package';
      result += `<span class="token-preprocessor">${escapeHtml(word)}</span>`;
      i += word.length;
      continue;
    }

    // ── Raw string literal ` (backtick — Go-specific, can't be escaped internally) ──
    if (line[i] === '`') {
      let end = i + 1;
      while (end < len && line[end] !== '`') end++;
      end = Math.min(end + 1, len);
      result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Interpreted string literal " ──
    if (line[i] === '"') {
      let end = i + 1;
      while (end < len) {
        if (line[end] === '\\') { end += 2; continue; }
        if (line[end] === '"') { end++; break; }
        end++;
      }
      result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Rune literal ' ──
    if (line[i] === "'") {
      let end = i + 1;
      while (end < len) {
        if (line[end] === '\\') { end += 2; continue; }
        if (line[end] === "'") { end++; break; }
        end++;
      }
      result += `<span class="token-string">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Number literal (int, float, hex 0x, octal 0o, binary 0b, imaginary suffix i) ──
    if (/[0-9]/.test(line[i]) && (i === 0 || !/[\w]/.test(line[i - 1]))) {
      let end = i;
      // hex
      if (line[i] === '0' && (line[i + 1] === 'x' || line[i + 1] === 'X')) {
        end += 2;
        while (end < len && /[0-9a-fA-F_]/.test(line[end])) end++;
      // octal
      } else if (line[i] === '0' && (line[i + 1] === 'o' || line[i + 1] === 'O')) {
        end += 2;
        while (end < len && /[0-7_]/.test(line[end])) end++;
      // binary
      } else if (line[i] === '0' && (line[i + 1] === 'b' || line[i + 1] === 'B')) {
        end += 2;
        while (end < len && /[01_]/.test(line[end])) end++;
      } else {
        while (end < len && /[0-9._eE]/.test(line[end])) end++;
      }
      // consume imaginary suffix: i
      if (line[end] === 'i') end++;
      result += `<span class="token-number">${escapeHtml(line.slice(i, end))}</span>`;
      i = end;
      continue;
    }

    // ── Word: keyword / type / method / identifier ──
    if (/[a-zA-Z_]/.test(line[i])) {
      let end = i;
      while (end < len && /[\w]/.test(line[end])) end++;
      const word = line.slice(i, end);

      // Peek past whitespace to detect function/method call
      let j = end;
      while (j < len && line[j] === ' ') j++;
      const isCall = line[j] === '(';

      let cls = '';
      if (KEYWORDS.has(word))        cls = 'token-keyword';
      else if (TYPES.has(word))      cls = 'token-type';
      else if (isCall)               cls = 'token-method';
      // Exported (PascalCase) identifiers — Go's own visibility convention
      else if (/^[A-Z]/.test(word)) cls = 'token-class-name';

      result += cls
        ? `<span class="${cls}">${escapeHtml(word)}</span>`
        : escapeHtml(word);

      i = end;
      continue;
    }

    // ── Multi-char operators: :=, <-, ++, --, ==, &&, <<, etc. ──
    {
      const slice = line.slice(i);
      const match = slice.match(OPERATOR_REGEX);
      if (match) {
        result += `<span class="token-operator">${escapeHtml(match[0])}</span>`;
        i += match[0].length;
        continue;
      }
    }

    // ── Everything else (punctuation, braces, semicolons) ──
    result += escapeHtml(line[i]);
    i++;
  }

  return result;
}
