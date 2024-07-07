import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/search/search-item.model';
import * as cards from '../../../response.json';

@Pipe({
  name: 'viewsCountDesc',
  standalone: true,
})
export class ViewsCountDescPipe implements PipeTransform {
  responseCards = cards.items;

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return responseCards?.sort((a, b) => {
        return +b.statistics.viewCount - +a.statistics.viewCount;
      });
    } return responseCards;
  }
}
