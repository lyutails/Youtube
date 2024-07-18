import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutCustomDate',
  standalone: true,
})
export class CutCustomDatePipe implements PipeTransform {
  transform(value: string | undefined) {
    return value?.replace('GMT+0300 (Moscow Standard Time)', '');
  }
}
