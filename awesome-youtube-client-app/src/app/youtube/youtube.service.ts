import { SearchItem } from './search/search-item.model';
import { Injectable } from '@angular/core';
import * as cards from '../../../response.json';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  responseCards = cards.items;
  isFiltersVisible = false;
  headerSearchInputValue = '';
  filterSearchInputValue = '';
  viewsAscSort = true;
  viewsDescSort = true;
  dateAscSort = true;
  dateDescSort = true;

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
  }

  public sortViewsAsc(value: boolean) {
    this.viewsAscSort = value;
    return value;
  }

  public sortViewsDesc(value: boolean) {
    this.viewsDescSort = value;
    return value;
  }

  public sortDateAsc(value: boolean) {
    this.dateAscSort = value;
    return value;
  }

  public sortDateDesc(value: boolean) {
    this.dateDescSort = value;
    return value;
  }
}
