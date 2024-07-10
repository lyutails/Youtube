import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/search/search-item.model';
import { YoutubeService } from '../youtube/youtube.service';

@Pipe({
  name: 'viewsCountDesc',
  standalone: true,
})
export class ViewsCountDescPipe implements PipeTransform {
  constructor(public youtubeService: YoutubeService){}
  responseCards = this.youtubeService.cards;

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return responseCards?.sort((a, b) => {
        return +b.statistics.viewCount - +a.statistics.viewCount;
      });
    } return responseCards;
  }
}
