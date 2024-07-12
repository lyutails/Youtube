import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/search/search-item.model';

@Pipe({
  name: 'dateDesc',
  standalone: true,
  pure: false,
})
export class DateDescPipe implements PipeTransform {
  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return responseCards?.sort((a, b) => {
        return (
          new Date(a.snippet.publishedAt).getTime() -
          new Date(b.snippet.publishedAt).getTime()
        );
      });
    }
    return [...responseCards];
  }
}
