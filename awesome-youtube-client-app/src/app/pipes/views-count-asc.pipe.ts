import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/search/search-item.model';
import { YoutubeService } from '../youtube/youtube.service';
@Pipe({
  name: 'viewsCountAsc',
  standalone: true,
  pure: false,
})
export class ViewsCountAscPipe implements PipeTransform {
  constructor(private youtubeService: YoutubeService) {}

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return [...responseCards]?.sort((a, b) => {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      });
    }
    return [...this.youtubeService.cards];
  }
}
