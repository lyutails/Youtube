import { YoutubeService } from './../youtube/youtube.service';
import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/search/search-item.model';

@Pipe({
  name: 'viewsCountDesc',
  standalone: true,
  pure: false,
})
export class ViewsCountDescPipe implements PipeTransform {
  constructor(private youtubeService: YoutubeService) {}
  initialCards = this.youtubeService.cards;

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return [...responseCards]?.sort((a, b) => {
        return +b.statistics.viewCount - +a.statistics.viewCount;
      });
    }
    return this.initialCards;
  }
}
