import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/search/search-item.model';
@Pipe({
  name: 'viewsCountAsc',
  standalone: true,
  pure: false,
})
export class ViewsCountAscPipe implements PipeTransform {
  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return [...responseCards]?.sort((a, b) => {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      });
    }
    return [...responseCards];
  }
}
