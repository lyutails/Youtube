import { SearchItem } from './search/search-item.model';
import { Injectable } from '@angular/core';
import * as cards from '../../../response.json';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  responseCards = cards.items;

  getCards(): SearchItem[] {
    return this.responseCards;
  }

  getCard(cardId: string): SearchItem | undefined {
    return this.getCards().find(elem => {
      return elem.id === cardId;
    })
  }
}
