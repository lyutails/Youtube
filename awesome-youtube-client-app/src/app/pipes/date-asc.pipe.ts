import { Pipe, PipeTransform } from '@angular/core';

import { SearchItem } from '../youtube/search/search-item.model';

@Pipe({
  name: 'dateAsc',
  standalone: true,
})
export class DateAscPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return [...responseCards]?.sort((a, b) => {
        return (
          new Date(b.snippet.publishedAt).getTime() -
          new Date(a.snippet.publishedAt).getTime()
        );
      });
    }
    return [...responseCards];
  }
}
