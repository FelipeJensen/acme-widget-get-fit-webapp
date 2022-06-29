import { formatDate } from '@angular/common';

export class DateFormatter {
  private dateFormat = 'MM/dd/yyyy';

  format(date: Date) {
    // TODO: localize?
    return `${formatDate(date, this.dateFormat, 'en-CA')}`;
  }
}
