import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(date, format): any {
    if (format === 'ago') {
      return moment(date).fromNow();
    } else {
      return moment(date).format(format);
    }
  }

}
