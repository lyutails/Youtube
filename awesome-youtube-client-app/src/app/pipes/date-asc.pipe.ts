import { Pipe, PipeTransform } from '@angular/core';
import * as cards from '../../../response.json';
import { SearchItem } from '../youtube/search/search-item.model';

@Pipe({
  name: 'dateAsc',
  standalone: true,
})
export class DateAscPipe implements PipeTransform {
  responseCards = cards.items;

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return responseCards?.sort((a, b) => {
        return (
          new Date(b.snippet.publishedAt).getTime() -
          new Date(a.snippet.publishedAt).getTime()
        );
      });
    }
    return responseCards;
  }
}
