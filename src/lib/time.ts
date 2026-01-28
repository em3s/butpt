// Timezone utilities

export interface TimezoneConfig {
  id: string;
  label: string;
  timezone: string;
}

/**
 * Get current hour (0-23) in a specific timezone
 */
export const getHourInTimezone = (timezone: string): number => {
  const now = new Date();
  const timeStr = now.toLocaleString('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    hour12: false,
  });
  return parseInt(timeStr, 10);
};

/**
 * Get formatted time (HH:MM) in a specific timezone
 */
export const getTimeInTimezone = (timezone: string): string => {
  const now = new Date();
  return now.toLocaleTimeString('en-GB', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

/**
 * Get position (0-1) on 24h timeline based on current time
 */
export const getTimelinePosition = (timezone: string): number => {
  const now = new Date();
  const timeStr = now.toLocaleString('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
  const [hours, minutes] = timeStr.split(':').map(Number);
  return (hours + minutes / 60) / 24;
};

/**
 * Default timezone configurations
 */
export const DEFAULT_TIMEZONES: TimezoneConfig[] = [
  { id: 'pt', label: 'PT', timezone: 'America/Los_Angeles' },
  { id: 'et', label: 'ET', timezone: 'America/New_York' },
  { id: 'cet', label: 'CET', timezone: 'Europe/Paris' },
  { id: 'kst', label: 'KST', timezone: 'Asia/Seoul' },
];
