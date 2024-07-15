import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutDate',
  standalone: true,
})
export class CutDatePipe implements PipeTransform {
  transform(value: string | undefined) {
    return value?.slice(0, -5);
  }
}
