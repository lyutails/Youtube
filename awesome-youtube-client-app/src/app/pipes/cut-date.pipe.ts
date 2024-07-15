import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutDate',
  standalone: true,
})
export class CutDatePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: string | undefined) {
    return value?.slice(0, -5);
  }
}
