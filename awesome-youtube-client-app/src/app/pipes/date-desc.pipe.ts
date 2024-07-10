import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/search/search-item.model';
import { YoutubeService } from '../youtube/youtube.service';

@Pipe({
  name: 'dateDesc',
  standalone: true,
})
export class DateDescPipe implements PipeTransform {
  constructor(public youtubeService: YoutubeService){}
  responseCards = this.youtubeService.cards;

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return responseCards?.sort((a, b) => {
        return (
          new Date(a.snippet.publishedAt).getTime() -
          new Date(b.snippet.publishedAt).getTime()
        );
      });
    }
    return responseCards;
  }
}
