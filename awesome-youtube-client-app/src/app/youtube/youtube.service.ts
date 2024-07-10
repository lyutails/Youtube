import { Injectable, inject } from '@angular/core';
// import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchResponse, VideosResponse } from './search/search-response.model';
import { Observable, map, mergeMap } from 'rxjs';
import { SearchItem } from './search/search-item.model';

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

  cards: SearchItem[] = [];
  card!: SearchItem;

  public http = inject(HttpClient);

  private API_KEY = 'AIzaSyCAf-6LwDXxX5ovVfBeLH5L5XBLMXSvvEM';
  private API_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos';

  maxResults = 10;
  searchInput = '';

  getRealAPICards(value: string): Observable<VideosResponse> {
    return this.http
      .get<SearchResponse>(
        `${this.API_SEARCH_URL}?type=video&part=snippet&maxResults=${this.maxResults}&q=${value}`
      )
      .pipe(
        map(data => {
          return data.items.map(item => item.id.videoId);
        })
      )
      .pipe(
        mergeMap(ids => {
          return this.http.get<VideosResponse>(
            `${this.API_VIDEOS_URL}?id=${ids.join()}&part=snippet,statistics`
          );
        })
      );
  }

  getRealDetailedCard(id: string) {
    return this.http.get<VideosResponse>(
      `${this.API_VIDEOS_URL}?&id=${id}&part=snippet,statistics`
    );
  }

  getCards(value: SearchItem[]) {
    console.log(value);
    return (this.cards = value);
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
