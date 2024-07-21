import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SearchItem } from '../youtube/search/search-item.model';
import { CustomCard } from './custom-card.model';
import { YoutubeState } from './store.model';

export const selectCards = createFeatureSelector<YoutubeState>('items');

export const selectOnlyCards = createSelector(selectCards, ({ cards }) => {
  return cards;
});

export const selectIsLoading = createSelector(
  selectCards,
  state => state.isLoading
);

export const selectCustomCard =
  createFeatureSelector<CustomCard[]>('custom cards');

export const selectHearts = createFeatureSelector<SearchItem[]>('hearts');

export const selectHeartsIds = createSelector(selectHearts, hearts => {
  return hearts.map(heart => heart.id);
});

export const selectPageNumber = createFeatureSelector<number>('page number');
