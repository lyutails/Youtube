import { Pipe, PipeTransform } from '@angular/core';
import * as cards from '../../../response.json';
import { SearchItem } from '../youtube/search/search-item.model';

@Pipe({
  name: 'viewsCountAsc',
  standalone: true,
})
export class ViewsCountAscPipe implements PipeTransform {
  responseCards = cards.items;

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return responseCards?.sort((a, b) => {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      });
    } return responseCards;
  }
}
