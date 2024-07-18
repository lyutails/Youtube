import { createFeatureSelector } from '@ngrx/store';

import { SearchItem } from '../../youtube/search/search-item.model';

export const selectCards = createFeatureSelector<SearchItem[]>('items');

export const selectHeartsState =
  createFeatureSelector<ReadonlyArray<SearchItem>>('hearts');

/* export const selectHearts = createSelector(
  selectCards,
  selectHeartsState,
  (items, hearts) => {
    return hearts.map(id => items.find(heart => heart.id === id)!);
  }
); */
