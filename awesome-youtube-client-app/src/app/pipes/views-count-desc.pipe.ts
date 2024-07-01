import { Pipe, PipeTransform } from '@angular/core';
import * as cards from '../../../response.json';
import { SearchItem } from '../search/search-item.model';

@Pipe({
  name: 'viewsCountDesc',
  standalone: true,
})
export class ViewsCountDescPipe implements PipeTransform {
  responseCards = cards.items;

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] | undefined {
    if (value === false) {
      return responseCards?.sort((a, b) => {
        return +b.statistics.viewCount - +a.statistics.viewCount;
      });
    } return responseCards;
  }
}
