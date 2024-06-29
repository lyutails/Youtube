/* import { Pipe, PipeTransform } from '@angular/core';
import * as cards from '../../../response.json';
import { SearchItem } from '../search/search-item.model';

@Pipe({
  name: 'date',
  standalone: true,
})
export class DatePipe implements PipeTransform {
  responseCards = cards.items;

  transform(responseCards: SearchItem[], inputValue: string): SearchItem[] {
    return responseCards.map((item) => item.snippet.publishedAt)
  }
}
 */