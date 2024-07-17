import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SearchItem } from '../../youtube/search/search-item.model';

export const selectCards =
  createFeatureSelector<ReadonlyArray<SearchItem>>('items');

export const selectHeartsState =
  createFeatureSelector<ReadonlyArray<string>>('hearts');

export const selectHearts = createSelector(
  selectCards,
  selectHeartsState,
  (items, hearts) => {
    return hearts.map(id => items.find(heart => heart.id === id)!);
  }
);
