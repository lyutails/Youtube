/* import { Pipe, PipeTransform } from '@angular/core';
import * as cards from '../../../response.json';
import { SearchItem } from '../search/search-item.model';

@Pipe({
  name: 'date',
  standalone: true,
})
export class DatePipe implements PipeTransform {
  responseCards = cards.items;

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    return responseCards?.sort((a, b) => {
      if (value) {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      } else return +b.statistics.viewCount - +a.statistics.viewCount;
    });
  }
}
 */