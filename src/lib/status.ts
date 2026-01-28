// Work status logic

export type WorkStatus = 'night' | 'morning' | 'working' | 'lunch' | 'evening';

export interface StatusInfo {
  status: WorkStatus;
  label: string;
  emoji: string;
}

/**
 * Get work status based on hour (0-23)
 *
 * Time segments:
 * - 0-6: Night (sleeping)
 * - 6-9: Morning (commute)
 * - 9-12: Working AM
 * - 12-13: Lunch
 * - 13-18: Working PM
 * - 18-21: Evening
 * - 21-24: Night (sleeping)
 */
export const getWorkStatus = (hour: number): WorkStatus => {
  if (hour >= 21 || hour < 6) return 'night';
  if (hour >= 6 && hour < 9) return 'morning';
  if (hour >= 9 && hour < 12) return 'working';
  if (hour >= 12 && hour < 13) return 'lunch';
  if (hour >= 13 && hour < 18) return 'working';
  return 'evening';
};

/**
 * Get status info with label and emoji
 */
export const getStatusInfo = (hour: number): StatusInfo => {
  const status = getWorkStatus(hour);

  const statusMap: Record<WorkStatus, Omit<StatusInfo, 'status'>> = {
    night: { label: 'Night', emoji: '🌙' },
    morning: { label: 'Morning', emoji: '🌅' },
    working: { label: 'Working', emoji: '💼' },
    lunch: { label: 'Lunch', emoji: '🍽️' },
    evening: { label: 'Evening', emoji: '🌆' },
  };

  return { status, ...statusMap[status] };
};

/**
 * Get color for timeline segment based on hour
 */
export const getSegmentColor = (hour: number): string => {
  const status = getWorkStatus(hour);

  const colorMap: Record<WorkStatus, string> = {
    night: '#9333ea', // purple
    morning: '#f97316', // orange
    working: '#22c55e', // green
    lunch: '#f97316', // orange
    evening: '#f97316', // orange
  };

  return colorMap[status];
};
