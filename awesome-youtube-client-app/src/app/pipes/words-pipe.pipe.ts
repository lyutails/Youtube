import { Pipe, PipeTransform } from '@angular/core';

import { SearchItem } from '../youtube/search/search-item.model';

@Pipe({
  name: 'wordsPipe',
  standalone: true,
})
export class WordsPipePipe implements PipeTransform {
  transform(responseCards: SearchItem[], inputValue: string): SearchItem[] {
    if (inputValue === '') {
      return [...responseCards];
    }
    return responseCards.filter(item =>
      item.snippet.title.toLowerCase().includes(inputValue.toLowerCase())
    );
  }
}
