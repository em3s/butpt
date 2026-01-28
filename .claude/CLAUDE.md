# butpt - wherever you are, but PT

## Overview
macOS timezone widget with timeline indicator. For devs working with global teams.

## Core Concept
- 24h timeline bar with `|` marker for current time
- Work status emoji (working, lunch, sleeping, etc.)
- PT-centric but supports all timezones

## Tech Stack
- TypeScript + React/JSX
- Ubersicht widget (no notarization needed)
- Path: `~/Library/Application Support/Ubersicht/widgets/`

## Widget Design
```
[City] [Status]
|-------|------------------------------------------|
0       ^now                                       24
```

## Structure
```
butpt/
├── src/                 # TypeScript source
├── ubersicht-widget/    # Compiled widget
└── docs/
```

## Code Rules
- TypeScript only (no JS)
- English code/comments only
- Concise comments
- React functional components

## Commands
```bash
npm run build      # lint + format + compile
npm run check      # lint + format (parallel)
npm run lint:fix   # auto-fix lint
npm run format     # auto-format

# widget testing
ln -sf $(pwd)/ubersicht-widget/butpt.widget ~/Library/Application\ Support/Ubersicht/widgets/

# autonomous mode
ralph --monitor
```

## Git Workflow
1. Branch: `feat/short-name`
2. Empty commit → create PR
3. Small commits during work
4. Squash merge to main

### Commit Rules
- lowercase, no period, max 50 chars
- present tense: "add" not "added"
- ex: `add timeline bar`

### PR Title = Squash Message
- ex: `feat: add world clock widget`

## Ralph Mode
`ralph --monitor` for autonomous loops until done.
