import { SearchItem } from './search/search-item.model';
import { Injectable } from '@angular/core';
import * as cards from '../../../response.json';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  responseCards = cards.items;
  isFiltersVisible = true;
  headerSearchInputValue = '';
  filterSearchInputValue = '';

  getCards(): SearchItem[] {
    return this.responseCards;
  }

  getCard(cardId: string): SearchItem | undefined {
    return this.getCards().find(elem => {
      return elem.id === cardId;
    });
  }

  toggleFilters(): void {
    this.isFiltersVisible = !this.isFiltersVisible;
  }

  catchHeaderInputSearchValue(value: string) {
    this.headerSearchInputValue = value;
  }

  catchFilterInputSearchValue(value: string) {
    this.filterSearchInputValue = value;
    console.log(this.filterSearchInputValue);
  }
}
