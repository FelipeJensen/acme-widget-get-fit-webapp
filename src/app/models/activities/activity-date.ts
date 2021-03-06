import { DateFormatter } from 'src/app/date-formatter';
import { ActivityFrequency } from './activity-frequency';

export class ActivityDate {
  private dateFormatter: DateFormatter = new DateFormatter();

  constructor(
    public id: number,
    public startDate: Date,
    public frequency: ActivityFrequency,
    public endDate?: Date | null
  ) {}

  description(): string {
    const startDate = this.dateFormatter.format(this.startDate);

    if (this.endDate) {
      const endDate = this.dateFormatter.format(this.endDate);

      return `${startDate} - ${endDate}`;
    }

    return `${startDate} - ${this.frequency}`;
  }
}
