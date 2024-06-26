import { Pipe, PipeTransform } from '@angular/core';
import * as cards from '../../response.json';
import { SearchItem } from './search/search-item.model';

@Pipe({
  name: 'wordsPipe',
  standalone: true,
})
export class WordsPipePipe implements PipeTransform {
  responseCards = cards.items;
  titles: string[] = [];

  transform(responseCards: SearchItem[], inputValue: string): SearchItem[] {
    if (inputValue === '') {
      return responseCards;
    } else {
      const filteredCards = this.responseCards.filter((item) =>
        item.snippet.title.toLowerCase().includes(inputValue),
      );
      return filteredCards;
    }
  }
}
