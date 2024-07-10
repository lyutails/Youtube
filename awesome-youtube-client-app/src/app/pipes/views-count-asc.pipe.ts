import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/search/search-item.model';
import { YoutubeService } from '../youtube/youtube.service';

@Pipe({
  name: 'viewsCountAsc',
  standalone: true,
})
export class ViewsCountAscPipe implements PipeTransform {
  constructor(public youtubeService: YoutubeService){}
  responseCards = this.youtubeService.cards;

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return responseCards?.sort((a, b) => {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      });
    } return responseCards;
  }
}
