import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'appSort'
})
export class SortPipe implements PipeTransform {

  public transform (
    value: any,
    sortBy: string,
    desc: boolean ): any {
      if (value === undefined || value === null) { return; }
      let timeSorts = ['opened', 'closed'];
      // Time sort
      if (timeSorts.indexOf( sortBy ) !== -1) {
        value.sort( (a, b) => {
          a = this.timeValue(a[sortBy]);
          b = this.timeValue(b[sortBy]);
          return desc ? b - a : a - b;
        });
      } else {
        value.sort( (a, b) => {
          a = a[sortBy];
          b = b[sortBy];
          return desc ? b.localeCompare(a) : a.localeCompare(b);
        });
      }
      return value;
  }

  public timeValue(date: string): number {
    if (date === '') {
      return moment().valueOf();
    }
    return moment(date, 'MM/DD/YYYY').valueOf();
  }

}
