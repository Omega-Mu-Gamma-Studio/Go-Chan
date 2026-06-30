# 🦫 Go-chan
**An anime-guided Go tutor for people who just want to ship a backend that works.**
*No flourish. No ceremony. Just `go run` and move on.*
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)](https://vite.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-5-orange)](https://zustand-demo.pmnd.rs/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055ff)](https://www.framer.com/motion/)
[![MIT License](https://img.shields.io/badge/License-MIT-green)](https://github.com/Omega-Mu-Gamma-Studio/Go-Chan/blob/main/LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-go--chan.vercel.app-7c6fff?logo=vercel&logoColor=white)](https://go-chan.vercel.app)

Built by [Omega Mu Gamma Studio](https://github.com/Omega-Mu-Gamma-Studio) · the team behind [SeeDS](https://see-ds.vercel.app), [KMapX](https://kmapx.vercel.app), [EG Suite](https://eg-suite.vercel.app), [GateLab](https://gatelab.vercel.app), [Java-chan](https://java-chan.vercel.app), and [PlusPlus-chan](https://plusplus-chan.vercel.app).

---

## What is Go-chan?

Go-chan is a browser-based Go learning app where a deadpan, minimalist mascot character teaches backend development with the same philosophy the language was built on: do less, but do it correctly. She doesn't get excited. She doesn't editorialize. She tells you what the code does, what it returns, and why `gofmt` already fixed your formatting before you noticed.

Every concept is taught through the lens of **building a backend API** — goroutines aren't academic, they're how your server handles ten thousand requests without falling over. Interfaces aren't theory, they're how you swap your database without touching your handlers. By the end of all 75 lessons, you've designed, built, tested, and deployed a real REST backend.

No magic. No hidden control flow. Just Go, explained exactly once.

🔗 **[Try it live → go-chan.vercel.app](https://go-chan.vercel.app)**

---

## The Teaching Model

Every single lesson — all 75 of them — follows this exact structure:

| Phase | Name | What Happens |
| --- | --- | --- |
| **1** | See It Work | Go-chan shows working code, the output, and explains what's happening line by line |
| **2** | See It Break | Same code, deliberately broken — she states the compiler or runtime error, flatly, and moves on |
| **3** | You Try | Student writes code or fills in blanks; pattern-based validation gives immediate feedback |

Validation is regex/pattern-based — no code execution in the browser. For full programs, students compile and run in their own environment.

---

## Curriculum — 75 Lessons Across 5 Units

All five units are complete, published, and available from day one.

| Unit | Topic | Lessons |
| --- | --- | --- |
| 1 | Go Basics | 15 |
| 2 | Composite Types and Methods | 15 |
| 3 | Goroutines and Concurrency | 15 |
| 4 | The Standard Library and HTTP | 15 |
| 5 | Testing, Modules, and Final Project | 15 |

<details>
<summary>📖 View all 75 lessons</summary>

**Unit 1 — Go Basics** `1.1` Why Go Was Built · `1.2` Installing Go and the Toolchain · `1.3` Your First Go Program · `1.4` Packages and Imports · `1.5` Variables and Zero Values · `1.6` Basic Types · `1.7` Constants and iota · `1.8` Functions and Multiple Returns · `1.9` if/else · `1.10` for — Go's Only Loop · `1.11` switch Statements · `1.12` defer · `1.13` Pointers · `1.14` The Blank Identifier · `1.15` Mini Challenge — Temperature Converter

**Unit 2 — Composite Types and Methods** `2.1` Arrays · `2.2` Slices · `2.3` Slice Internals — len, cap, append · `2.4` Maps · `2.5` Structs · `2.6` Nested Structs · `2.7` Methods on Structs · `2.8` Pointer Receivers · `2.9` Interfaces · `2.10` The Empty Interface · `2.11` Type Assertions · `2.12` Go's Error Philosophy · `2.13` The error Interface · `2.14` Custom and Wrapped Errors · `2.15` Mini Challenge — Student Record System

**Unit 3 — Goroutines and Concurrency** `3.1` What are Goroutines? · `3.2` Launching Goroutines · `3.3` Channels · `3.4` Buffered Channels · `3.5` select Statement · `3.6` WaitGroups · `3.7` Mutex and the sync Package · `3.8` Worker Pools · `3.9` Fan-Out Fan-In Pattern · `3.10` The Context Package · `3.11` Cancellation and Timeouts · `3.12` Race Conditions and the Race Detector · `3.13` Goroutine Leaks · `3.14` When Not to Use Goroutines · `3.15` Mini Challenge — Concurrent File Downloader

**Unit 4 — The Standard Library and HTTP** `4.1` fmt and Formatting · `4.2` strings and strconv · `4.3` os and File I/O · `4.4` encoding/json · `4.5` net/http — Making Requests · `4.6` Building an HTTP Server · `4.7` Routing with net/http · `4.8` JSON Request and Response · `4.9` Middleware · `4.10` Structuring a Go API · `4.11` Working with SQL — database/sql · `4.12` CRUD Operations · `4.13` Prepared Statements and Transactions · `4.14` GORM Intro · `4.15` Mini Challenge — Build a REST Endpoint

**Unit 5 — Testing, Modules, and Final Project** `5.1` The testing Package · `5.2` Table-Driven Tests · `5.3` Mocking with Interfaces · `5.4` Benchmarks · `5.5` Test Coverage · `5.6` Go Modules · `5.7` Dependency Management · `5.8` Project Layout Conventions · `5.9` Building and Cross-Compiling · `5.10` Dockerizing a Go App · `5.11` Generics in Go · `5.12` Reflection Basics · `5.13` Project — API Design · `5.14` Project — Implementation and Testing · `5.15` Project — Deploy Your Backend

</details>

---

## Features

### 🎓 Learning System

- **Three-phase lesson structure** — See It Work → See It Break → You Try, on every lesson, no exceptions
- **Backend-API context throughout** — every code example is part of one growing REST service
- **Contextual hint escalation** — hint appears at 2 wrong attempts, solution unlocks at 5
- **Pattern-based validation** — instant feedback without a server or code execution engine
- **Full lesson navigation** — collapsible sidebar with per-lesson completion tracking

### 🎮 Progression & Rewards

- **XP system** — earn XP on lesson completion; bonus XP for first-attempt success and hint-free runs
- **10 levels** — clear thresholds (100 XP per level) with a persistent progress bar
- **Level-gated cosmetics** — new rewards unlock as you level up, alternating themes and outfits
- **localStorage persistence** — no account needed, progress is saved in the browser

### 🎨 The Shop

**App Themes** (equippable backgrounds):

| Level | Item | Style |
| --- | --- | --- |
| 1 | Concrete & Gopher Blue 🩵 | Flat, functional, exactly the color of the Go mascot — the default |
| 3 | Server Rack Grey ⚙️ | Bare metal, no decoration. It works, that's the point |
| 5 | Terminal Cyan 💻 | A single color on black. She doesn't need more |
| 7 | Goroutine Lattice 🕸️ | A faint grid of channels, quietly running in the background |
| 9 | Dock Container Orange 📦 | The color of a container that just shipped without incident |

**Character Outfits** (equippable; all with full 6-expression sprite art):

| Level | Outfit | Vibe |
| --- | --- | --- |
| 1 | Plain Work Shirt 👕 | No logo, no pattern. Her signature look, always equipped |
| 2 | Server Tech Vest 🦺 | Backend Mode — ON. Pockets for cables, not snacks |
| 4 | Compiler's Cardigan 🧥 | Slightly too practical to be called cozy |
| 5 | Off-Duty Sweater 😐 | The tests passed on the first try. She is, technically, pleased |
| 6 | Mutex Guard Coat 🔒 | One goroutine at a time. She enforces this personally |
| 7 | Dockworker's Jacket 📦 | Concurrency Mode — ON. She's loading ten thousand requests, calmly |
| 7 | Idol — Zero Allocations ✨ | She already performs a Celebration. She finds it slightly excessive |
| 8 | Night Shift Hoodie 🌙 | Monitoring uptime. The dashboard is green. She is unmoved |
| 8 | Architect's Flannel 🪵 | She designed this API. It has exactly the endpoints it needs |
| 10 | Uptime Crown 👑 | 99.99% and counting. Wear the crown, briefly, then go back to work |
| 10 | Off the Clock 🏖️ | The deploy succeeded. She'll allow five minutes of rest |

**Downloadable Wallpapers** (phone/desktop art, save to your device):

| Level | Wallpaper | Vibe |
| --- | --- | --- |
| 3 | Build Succeeded, No Comment 🌆 | Two words on the terminal. She doesn't need a third |
| 3 | Concrete Courtyard 🌥️ | Flat grey light, a single gopher motif carved into the wall |
| 5 | The Channel Room 🏰 | Pipes running floor to ceiling, every one of them buffered correctly |
| 5 | Mountain Summit — No Drama 🏔️ | She got to the top. She is not going to make a thing of it |
| 5 | Server Room Library 📚 | Cold light, racks of documentation, zero unnecessary words |
| 7 | Rainy Loading Dock 🌧️ | Containers shipping out anyway. The weather is irrelevant |
| 7 | Rooftop Watchpoint 🌃 | City skyline, the sign reads `// it just works` |
| 7 | Neon Terminal Arcade 🕹️ | One color, one font, one very fast benchmark running in the corner |
| 9 | Shrine Steps — Idle, Stable 🏮 | Stone steps, dawn mist, nothing crashed overnight |
| 9 | Dock at Dusk 🌅 | The last container shipped. She watches it leave, says nothing |

### ✨ Character & Expressions

Go-chan has 6 distinct expressions that fire contextually throughout lessons:

| State | Trigger |
| --- | --- |
| `idle` | Phase 1 — explaining working code |
| `thinking` | Hint mode; waiting for input |
| `surprised` | Correct answer (a raised eyebrow, at most) |
| `happy` | Phase transitions and encouragement |
| `sad` | Wrong answer (first few times) |
| `idle-sleep` | Idle between interactions |

Each equipped outfit has its own full set of 6 expression sprites — swapping outfits changes Go-chan's entire look, not just a filter.

**Domain Expansion** — a fullscreen celebration effect fires on milestone level-ups, complete with confetti. She finds it a bit much. It fires anyway.

---

## Tech Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Frontend | React 19 + Vite 8 | Fast HMR, ES modules, modern JSX transform |
| Styling | Plain CSS + Framer Motion 12 | No CSS framework overhead; animations via Motion |
| State | Zustand 5 | Minimal boilerplate, works with `persist` middleware out of the box |
| Data | JSON files + localStorage | Zero backend for Phase 1; data adapter ready for Phase 2 |
| Routing | React Router v7 | File-level page components |
| Hosting | Vercel | Zero-config deployment |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Running Locally

```bash
# Clone the repo
git clone https://github.com/Omega-Mu-Gamma-Studio/Go-Chan.git
cd Go-Chan

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### Deploying to Vercel

This repo is Vercel-ready with no configuration needed. Connect the repo in the Vercel dashboard and it'll detect the Vite setup automatically. No environment variables required for Phase 1.

---

## Project Structure

```
Go-Chan/
├── public/
│   ├── sprites/                      # Character expressions (Plain Work Shirt — base outfit)
│   │   ├── teaching.png
│   │   ├── excited.png
│   │   ├── frustrated.png
│   │   ├── thinking.png
│   │   ├── oops.png
│   │   ├── idle.png
│   │   └── uniforms/                 # Outfit-specific sprite sets (6 expressions each)
│   │       ├── server-vest/
│   │       ├── compiler-cardigan/
│   │       ├── off-duty-sweater/
│   │       ├── mutex-coat/
│   │       ├── dockworker-jacket/
│   │       ├── idol/
│   │       ├── night-shift-hoodie/
│   │       ├── architect-flannel/
│   │       ├── uptime-crown/
│   │       └── off-the-clock/
│   └── wallpapers/                   # Downloadable device wallpapers (10 total)
│       ├── gochan-build-succeeded.png
│       ├── gochan-concrete-courtyard.png
│       ├── gochan-channel-room.png
│       ├── gochan-no-drama-summit.png
│       ├── gochan-server-library.png
│       ├── gochan-rainy-dock.png
│       ├── gochan-rooftop-watchpoint.png
│       ├── gochan-neon-terminal.png
│       ├── gochan-shrine-idle.png
│       └── gochan-dock-dusk.png
│
├── src/
│   ├── components/
│   │   ├── character/GoChan.jsx        # Sprite renderer; reads spriteOverrides from equipped outfit
│   │   ├── layout/AppLayout.jsx        # Root layout; applies theme + background
│   │   ├── lesson/                     # LessonCanvas, CodeBlock, PhaseIndicator
│   │   └── ui/                         # Sidebar, BottomBar, XPDisplay, ProgressBar
│   │
│   ├── data/
│   │   ├── lessons/                  # 75 JSON lesson files (unit1–5, lessons 1–15)
│   │   ├── units/                    # 5 unit JSON files (id, title, lesson list)
│   │   └── shopItems.js              # All cosmetic definitions (outfits, themes, downloadables)
│   │
│   ├── hooks/
│   │   ├── useLesson.js              # Lesson phase state machine
│   │   ├── useProgress.js            # Progress store bindings
│   │   └── useSound.js               # Sound effect hooks
│   │
│   ├── pages/
│   │   ├── Home.jsx                  # Dashboard / unit selection
│   │   ├── UnitPage.jsx              # Lesson list for a unit
│   │   ├── LessonPage.jsx            # The actual lesson experience
│   │   └── Shop.jsx                  # Cosmetics shop
│   │
│   ├── services/
│   │   ├── lessonService.js          # JSON loader + lesson data access
│   │   └── storageService.js         # localStorage adapter (Phase 2: swap for API)
│   │
│   ├── store/
│   │   ├── progressStore.js          # Zustand store: XP, level, outfits, progress
│   │   └── lessonStore.js            # Zustand store: active lesson state
│   │
│   └── utils/
│       ├── xpCalculator.js           # XP thresholds, level math, earned XP calculation
│       ├── patternMatcher.js         # Regex-based answer validation engine
│       └── goHighlighter.js          # Go syntax highlighting for code blocks
```

---

## Adding Content

### Adding a New Lesson

Lesson JSON files live at `src/data/lessons/unit{N}/{N}.{M}.json`. Each file follows this structure:

```json
{
  "id": "1.1",
  "title": "Why Go Was Built",
  "xp": 10,
  "phases": [
    {
      "phase": 1,
      "title": "See It Work",
      "dialogue": "Go-chan's explanation text here",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"Hello, Player!\")\n}",
      "output": "Hello, Player!"
    },
    {
      "phase": 2,
      "title": "See It Break",
      "dialogue": "Here's what happens when...",
      "code": "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"Hello, Player!\"\n}",
      "error": "syntax error: unexpected newline, expecting comma or )"
    },
    {
      "phase": 3,
      "title": "You Try",
      "dialogue": "Your turn.",
      "prompt": "What package provides Println for console output in Go?",
      "answer": "fmt",
      "hint": "It's a three-letter package most Go files import first.",
      "solution": "fmt"
    }
  ]
}
```

### Adding a New Outfit

1. Create a folder under `public/sprites/uniforms/<outfit-name>/`
2. Drop in 6 PNGs named: `teaching.png`, `idle.png`, `oops.png`, `thinking.png`, `frustrated.png`, `excited.png`
3. Add an entry to `src/data/shopItems.js` with `spriteOverrides` mapping each expression state to the correct file path
4. That's it — `GoChan.jsx` and `Shop.jsx` both read `spriteOverrides` automatically

### Developer Cheat Mode

In the Shop page, **triple-click the Shop title** to toggle the dev cheat:

- First triple-click → instantly sets XP to 9999 and level to 10 (unlocks everything)
- Second triple-click → resets XP and level back to 0 / 1

---

## Roadmap

### Phase 1 (Current) ✅

- All 75 lessons authored and published
- Full cosmetics system (11 outfits, 5 themes, 10 downloadable wallpapers)
- XP/leveling, shop, expressions, domain expansion
- localStorage persistence, no account required

### Phase 2 (Planned)

- PostgreSQL + Express API backend
- User accounts and cross-device sync
- Progress stored server-side (the store already has a `_resetForMigration` hook and storage adapter pattern ready for this)
- Instructor view: class-wide completion dashboards
- No frontend rewrite required — only the storage layer changes

---

## Credits & Assets

**Character Art**: Go-chan's sprites were generated using AI tools and hand-curated for expression consistency by the Omega Mu Gamma Studio team. All character designs are proprietary to Omega Mu Gamma Studio.

**Note**: As a free, open-source educational tool, we prioritized shipping a complete learning experience over commissioning custom art. If you're an artist interested in contributing official character designs, reach out — we'd love to collaborate.

---

## Part of Omega Mu Gamma Studio

Go-chan is part of a student-built suite of open-source engineering and CS education tools from Omega Mu Gamma Studio.

| Tool | What it does |
| --- | --- |
| [SeeDS](https://see-ds.vercel.app) | 3D data structure visualizer with drag-and-drop Playground mode |
| [KMapX](https://kmapx.vercel.app) | Karnaugh map simplifier with don't-care support |
| [EG Suite](https://eg-suite.vercel.app) | 3D Engineering Graphics simulator for ME22201 |
| [GateLab](https://gatelab.vercel.app) | 2D digital logic schematic playground (CS22303) |
| [Java-chan](https://java-chan.vercel.app) | Anime-guided Java tutor for CS22301 |
| [PlusPlus-chan](https://plusplus-chan.vercel.app) | Anime-guided C++ tutor for aspiring game developers |
| **Go-chan** | Anime-guided Go tutor for backend API development — *this repo* |

---

## License

The **source code** for this project is released under the [MIT License](https://github.com/Omega-Mu-Gamma-Studio/Go-Chan/blob/main/LICENSE).

**The character art, sprites, and visual assets for Go-chan are proprietary.** They are not covered by the MIT License and may not be reproduced, redistributed, or used outside this project without explicit permission from Omega Mu Gamma Studio.

© 2026 Omega Mu Gamma Studio
