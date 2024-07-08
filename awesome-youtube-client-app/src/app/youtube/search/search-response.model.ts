import { SearchItem } from './search-item.model';

export interface VideosResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Omit<SearchItem, 'id' | 'statistics'> & { id: FullID }[];
}

interface FullID {
  kind: string;
  videoId: string;
}
