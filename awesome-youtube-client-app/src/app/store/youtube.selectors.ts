import { createFeatureSelector } from '@ngrx/store';

import { SearchItem } from '../youtube/search/search-item.model';
import { CustomCard } from './custom-card.model';

export const selectCards = createFeatureSelector<SearchItem[]>('items');

export const selectCustomCard =
  createFeatureSelector<CustomCard[]>('custom cards');

export const selectHeartsState =
  createFeatureSelector<ReadonlyArray<SearchItem>>('hearts');
