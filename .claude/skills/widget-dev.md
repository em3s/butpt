# Widget Development Skill

## Ubersicht Widget Structure (TypeScript)

### Basic TSX Widget
```tsx
export const refreshFrequency = 60000; // 1 min

export const command = "echo ''";

interface WidgetProps {
  output: string;
  error?: string;
}

export const render = ({ output, error }: WidgetProps) => (
  <div className="times-widget">
    {error ? <div>Error: {error}</div> : <div>{output}</div>}
  </div>
);

export const className = `
  top: 20px;
  left: 20px;
  font-family: -apple-system;
`;
```

### Key APIs
- `refreshFrequency`: Update interval (ms)
- `command`: Shell command for data
- `render`: React component with output/error props
- `className`: CSS-in-JS styles

## Timezone Handling
```typescript
const getTimeInZone = (tz: string): Date => {
  const str = new Date().toLocaleString('en-US', { timeZone: tz });
  return new Date(str);
};

const getHourInZone = (tz: string): number => {
  return getTimeInZone(tz).getHours();
};
```

## Work Status Logic
```typescript
type WorkStatus = 'sleeping' | 'commuting' | 'working' | 'lunch' | 'evening';

const getWorkStatus = (hour: number): WorkStatus => {
  if (hour >= 21 || hour < 6) return 'sleeping';
  if (hour >= 6 && hour < 9) return 'commuting';
  if (hour >= 9 && hour < 12) return 'working';
  if (hour >= 12 && hour < 13) return 'lunch';
  if (hour >= 13 && hour < 18) return 'working';
  return 'evening';
};
```

## Common Timezones
- America/Los_Angeles (PST/PDT)
- America/New_York (EST/EDT)
- Europe/London (GMT/BST)
- Asia/Seoul (KST)
- Asia/Tokyo (JST)
