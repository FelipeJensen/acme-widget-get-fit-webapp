import { DateFormatter } from 'src/app/date-formatter';
import { ActivityFrequency } from '../../../models/activities/activity-frequency';
import { ActivitySignUpFiltered } from './activity-sign-up-filtered';

export class ActivityDateFiltered {
  private dateFormatter: DateFormatter = new DateFormatter();

  constructor(
    public id: number,
    public startDate: Date,
    public frequency: ActivityFrequency,
    public activitySignUps: ActivitySignUpFiltered[],
    public endDate?: Date | null
  ) {}

  description(): string {
    const startDate = this.dateFormatter.format(this.startDate);

    if (this.endDate) {
      const endDate = this.dateFormatter.format(this.endDate);

      return `From ${startDate} to ${endDate}`;
    }

    return `Starts ${startDate} - ${this.frequency}`;
  }
}
