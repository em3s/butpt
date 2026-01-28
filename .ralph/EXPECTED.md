# butpt - Expected Design Spec

## Layout

```
[█|██████████████████████████████] PT   🌙 Night   03:00
[███|█████████████████████████████] ET   🌅 Morning 06:00
[██████████████|██████████████████] CET  ☀️ Lunch   12:00
[██████████████████████████|██████] KST  🌙 Evening 20:00
```

- Rows stacked vertically (no gap between bars)
- Marker (|) position shows current time
- Right side: timezone / emoji / status / time

## Timeline Bar

Same for all rows:
```
[Night|Morning|Work|Lunch|Work|Evening|Night]
 0-6    6-9   9-12 12-13 13-18  18-21  21-24
```

Colors:
- Purple: Night (0-6, 21-24)
- Orange: Morning/Lunch/Evening (6-9, 12-13, 18-21)
- Green: Working (9-12, 13-18)

Only the marker (|) position differs per timezone.

## Components

Per row:
1. Timeline bar with marker
2. Timezone code (PT, ET, CET, KST, etc.)
3. Status emoji (🌙☀️🌅)
4. Status text (Night, Morning, Lunch, Working, Evening)
5. Current time (HH:MM, 24h format)

## Features

### Timezone Management
- Add unlimited timezones
- Remove timezone
- Custom timezone label (optional)

### Sorting
- Manual: drag to reorder / config file
- Auto options:
  - By time (earliest first)
  - By UTC offset
  - By status (awake first)

## Style

- Dark background
- Rounded corners (widget container)
- Monospace or system font
- Compact rows (minimal vertical spacing)

## Config Example

```typescript
const timezones = [
  { id: 'pt', label: 'PT', timezone: 'America/Los_Angeles' },
  { id: 'et', label: 'ET', timezone: 'America/New_York' },
  { id: 'cet', label: 'CET', timezone: 'Europe/Paris' },
  { id: 'kst', label: 'KST', timezone: 'Asia/Seoul' },
];
```

## Widget Sizes

- Small: 2-3 timezones
- Medium: 4-6 timezones
- Large: 7+ timezones
