import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../youtube/search/search-item.model';
import { YoutubeService } from '../youtube/youtube.service';

@Pipe({
  name: 'dateAsc',
  standalone: true,
  pure: false,
})
export class DateAscPipe implements PipeTransform {
  constructor(private youtubeService: YoutubeService) {}

  transform(responseCards: SearchItem[], value: boolean): SearchItem[] {
    if (value === false) {
      return [...responseCards]?.sort((a, b) => {
        return (
          new Date(b.snippet.publishedAt).getTime() -
          new Date(a.snippet.publishedAt).getTime()
        );
      });
    }
    return [...this.youtubeService.cards];
  }
}
