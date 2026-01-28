# butpt - Implementation Plan

## Summary
macOS timezone widget with timeline indicator. Shows colleague's local time and work status at a glance. "wherever you are, but PT"

## Why Ubersicht?
- No notarization required
- TypeScript + React/JSX support
- Desktop widget
- Free, open source

## Phase 1: Core Widget
- [ ] Basic Ubersicht widget structure
- [ ] Single timezone display
- [ ] 24h timeline bar with current position marker
- [ ] Time segment coloring (work/lunch/sleep)

## Phase 2: Status Indicators
- [ ] Work status emoji logic
- [ ] Custom work hours config
- [ ] Multiple timezone support
- [ ] City name display

## Phase 3: Polish
- [ ] Dark/Light mode support
- [ ] Compact/Expanded layouts
- [ ] Animation for time transition

## Phase 4: Distribution
- [ ] Scriptable version for iOS
- [ ] Documentation
- [ ] Widget gallery submission

## Timeline Visualization
```
San Francisco        Seoul
[====|=========----] [-----|=============]
 6am  ^10am    6pm    10pm  ^2pm
      now             now
```
- `=` : Work hours (highlighted)
- `-` : Off hours
- `|` : Current time marker

## Status Logic
```
Hour -> Status
06-09: commute
09-12: working
12-13: lunch
13-18: working
18-21: evening
21-06: sleeping
```

## Data Model
```typescript
interface Location {
  id: string;
  name: string;
  timezone: string;
  workStart: number;
  workEnd: number;
  lunchStart: number;
  lunchEnd: number;
}
```

## File Structure
```
src/
├── lib/
│   ├── time.ts      # Timezone utils
│   ├── status.ts    # Status logic
│   └── config.ts    # User settings
└── widget/
    └── index.tsx    # Main widget

ubersicht-widget/
└── butpt.widget/
    └── index.jsx    # Compiled output
```
