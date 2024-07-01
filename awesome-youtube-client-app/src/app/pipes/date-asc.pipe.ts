import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAsc',
  standalone: true
})
export class DateAscPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
