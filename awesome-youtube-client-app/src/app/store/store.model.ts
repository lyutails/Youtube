import { SearchItem } from '../youtube/search/search-item.model';

export interface YoutubeState {
  isLoading: boolean;
  isError: boolean;
  cards: SearchItem[];
}
