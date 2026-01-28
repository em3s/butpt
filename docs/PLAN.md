# Times Widget - Implementation Plan

## Summary
macOS world clock widget with timeline indicator. Shows colleague's local time and work status at a glance.

## Why Ubersicht?
- No notarization required (open source, self-hosted)
- HTML/CSS/JS - familiar web tech
- React/JSX support
- Desktop widget (not notification center)
- Free, active community

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
- [ ] Settings UI (if possible)
- [ ] Animation for time transition

## Phase 4: Distribution
- [ ] Scriptable version for iOS
- [ ] Documentation
- [ ] Widget gallery submission

## Technical Decisions

### Timeline Visualization
```
San Francisco        Seoul
[====|=========----] [-----|=============]
 6am  ^10am    6pm    10pm  ^2pm
      now             now
```
- `=` : Work hours (highlighted)
- `-` : Off hours
- `|` : Current time marker

### Status Logic
```
Hour -> Status
06-09: commute (if workday)
09-12: working
12-13: lunch
13-18: working
18-21: evening
21-06: sleeping
```

### Data Model
```js
{
  id: 'sf-office',
  name: 'San Francisco',
  timezone: 'America/Los_Angeles',
  workStart: 9,
  workEnd: 18,
  lunchStart: 12,
  lunchEnd: 13
}
```

## File Structure
```
ubersicht-widget/
└── times.widget/
    ├── index.jsx        # Main widget
    ├── lib/
    │   ├── time.js      # Timezone utils
    │   ├── status.js    # Status logic
    │   └── config.js    # User settings
    └── styles.js        # CSS-in-JS
```

## Next Steps
1. Install Ubersicht if not present
2. Create minimal working widget
3. Implement timeline bar
4. Add status indicators
5. Multi-timezone support
