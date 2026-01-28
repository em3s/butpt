# Ralph Fix Plan - butpt

## High Priority
(all completed)

## Medium Priority
- [ ] Add timezone config (add/remove timezones)
- [ ] Implement sorting (manual, by time, by offset, by status)
- [ ] Dark theme styling improvements

## Low Priority
- [ ] Add Scriptable (iOS) version
- [ ] Custom timezone labels
- [ ] Performance optimization

## Completed
- [x] Project setup (TypeScript, ESLint, Prettier)
- [x] Ubersicht installed
- [x] Design spec created (EXPECTED.md)
- [x] Implement time utilities (timezone, hour calculation)
- [x] Implement status logic (night/morning/work/lunch/evening)
- [x] Build timeline bar component with color segments
- [x] Add current time marker (|) to timeline
- [x] Create row layout (bar + timezone + emoji + status + time)
- [x] Stack multiple rows vertically (aligned)
- [x] Status emoji mapping

## Notes
- Run `npm run check` after each change
- See EXPECTED.md for design reference
- Widget location: ubersicht-widget/butpt.widget/index.jsx
