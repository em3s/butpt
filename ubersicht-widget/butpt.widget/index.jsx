// butpt - wherever you are, but PT
// Ubersicht widget for timezone visualization

export const refreshFrequency = 60000; // 1 minute

export const command = "echo ''";

// Time segments for 24h bar
const SEGMENTS = [
  { start: 0, end: 6, status: 'night' },
  { start: 6, end: 9, status: 'morning' },
  { start: 9, end: 12, status: 'working' },
  { start: 12, end: 13, status: 'lunch' },
  { start: 13, end: 18, status: 'working' },
  { start: 18, end: 21, status: 'evening' },
  { start: 21, end: 24, status: 'night' },
];

const COLORS = {
  night: '#c4b5fd',
  morning: '#fdba74',
  working: '#86efac',
  lunch: '#fcd34d',
  evening: '#fda4af',
};

const STATUS_INFO = {
  night: { label: 'Night', emoji: '🌙' },
  morning: { label: 'Morning', emoji: '🌅' },
  working: { label: 'Working', emoji: '💼' },
  lunch: { label: 'Lunch', emoji: '🍽️' },
  evening: { label: 'Evening', emoji: '🌆' },
};

const TIMEZONES = [
  { id: 'pt', label: 'PT', timezone: 'America/Los_Angeles' },
  { id: 'et', label: 'ET', timezone: 'America/New_York' },
  { id: 'cet', label: 'CET', timezone: 'Europe/Paris' },
  { id: 'kst', label: 'KST', timezone: 'Asia/Seoul' },
];

const getTimeInTimezone = (tz) => {
  const now = new Date();
  return now.toLocaleTimeString('en-GB', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

const getHourInTimezone = (tz) => {
  const now = new Date();
  const str = now.toLocaleString('en-US', {
    timeZone: tz,
    hour: 'numeric',
    hour12: false,
  });
  return parseInt(str, 10);
};

const getTimelinePosition = (tz) => {
  const now = new Date();
  const str = now.toLocaleString('en-US', {
    timeZone: tz,
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
  const [h, m] = str.split(':').map(Number);
  return ((h + m / 60) / 24) * 100;
};

const getStatus = (hour) => {
  if (hour >= 21 || hour < 6) return 'night';
  if (hour >= 6 && hour < 9) return 'morning';
  if (hour >= 9 && hour < 12) return 'working';
  if (hour >= 12 && hour < 13) return 'lunch';
  if (hour >= 13 && hour < 18) return 'working';
  return 'evening';
};

const TimelineBar = ({ position }) => (
  <div style={styles.barWrapper}>
    <div style={styles.barContainer}>
      {SEGMENTS.map((seg, i) => (
        <div
          key={i}
          style={{
            width: `${((seg.end - seg.start) / 24) * 100}%`,
            height: '12px',
            backgroundColor: COLORS[seg.status],
          }}
        />
      ))}
    </div>
    <div style={{ ...styles.marker, left: `${position}%` }} />
  </div>
);

const TimezoneRow = ({ config }) => {
  const time = getTimeInTimezone(config.timezone);
  const hour = getHourInTimezone(config.timezone);
  const position = getTimelinePosition(config.timezone);
  const status = getStatus(hour);
  const info = STATUS_INFO[status];

  return (
    <div style={styles.row}>
      <TimelineBar position={position} />
      <span style={styles.label}>{config.label}</span>
      <span style={styles.emoji}>{info.emoji}</span>
      <span style={styles.statusText}>{info.label}</span>
      <span style={styles.time}>{time}</span>
    </div>
  );
};

export const render = () => (
  <div style={styles.container}>
    {TIMEZONES.map((tz) => (
      <TimezoneRow key={tz.id} config={tz} />
    ))}
  </div>
);

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
    borderRadius: '12px',
    padding: '16px',
    color: '#fff',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    height: '28px',
    minHeight: '28px',
    maxHeight: '28px',
    marginBottom: '0px',
  },
  barWrapper: {
    position: 'relative',
    width: '200px',
    height: '12px',
  },
  barContainer: {
    display: 'flex',
    width: '200px',
    height: '12px',
    borderRadius: '6px',
    overflow: 'hidden',
  },
  marker: {
    position: 'absolute',
    top: '-3px',
    width: '3px',
    height: '18px',
    backgroundColor: '#fff',
    borderRadius: '2px',
    transform: 'translateX(-50%)',
    boxShadow: '0 0 4px rgba(0,0,0,0.5)',
  },
  label: {
    width: '36px',
    fontSize: '14px',
    fontWeight: '600',
  },
  emoji: {
    fontSize: '16px',
    width: '24px',
    height: '24px',
    lineHeight: '24px',
    textAlign: 'center',
  },
  statusText: {
    width: '70px',
    fontSize: '13px',
    color: '#aaa',
  },
  time: {
    fontSize: '14px',
    fontWeight: '500',
    fontVariantNumeric: 'tabular-nums',
  },
};

export const className = `
  top: 20px;
  left: 20px;
`;
