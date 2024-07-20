import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';

import { SearchItem } from './search/search-item.model';
import { SearchResponse, VideosResponse } from './search/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  isFiltersVisible = false;
  headerSearchInputValue = '';
  filterSearchInputValue = '';
  viewsAscSort = true;
  viewsDescSort = true;
  dateAscSort = true;
  dateDescSort = true;
  nextPageToken = '';
  prevPageToken = '';

  cards: SearchItem[] = [];
  card!: SearchItem;

  public http = inject(HttpClient);

  maxResults = 20;
  searchInput = '';

  getRealAPICards(value: string, token?: string): Observable<VideosResponse> {
    this.searchInput = value;
    return this.http
      .get<SearchResponse>(
        `search?type=video&part=snippet&maxResults=${this.maxResults}&q=${value}${!token ? '' : `&pageToken=${token}`}`
      )
      .pipe(
        map(data => {
          this.setNextPageToken(data.nextPageToken!);
          this.setPrevPageToken(data.prevPageToken!);
          return data.items.map(item => item.id.videoId);
        })
      )
      .pipe(
        mergeMap(ids => {
          return this.http.get<VideosResponse>(
            `videos?id=${ids.join()}&part=snippet,statistics`
          );
        })
      );
  }

  getPaginationRealAPICards(direction: 'next' | 'prev') {
    const token =
      direction === 'next' ? this.nextPageToken : this.prevPageToken;
    return this.getRealAPICards(this.searchInput, token);
  }

  setNextPageToken(value: string) {
    console.log(value);
    this.nextPageToken = value;
  }

  setPrevPageToken(value: string) {
    console.log(value);
    this.prevPageToken = value;
  }

  getRealDetailedCard(id: string) {
    return this.http.get<VideosResponse>(
      `videos?&id=${id}&part=snippet,statistics`
    );
  }

  getCards(value: SearchItem[]) {
    this.cards = value;
    return this.cards;
  }

  setDetailedCard(value: SearchItem) {
    this.card = value;
  }

  toggleFilters(): void {
    this.isFiltersVisible = !this.isFiltersVisible;
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
