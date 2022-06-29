import { ActivityDateFiltered } from './activity-date-filtered';

export interface ActivityFiltered {
  id: number;
  name: string;
  activityDates: ActivityDateFiltered[];
}
