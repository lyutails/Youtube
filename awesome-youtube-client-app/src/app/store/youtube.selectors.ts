import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SearchItem } from '../youtube/search/search-item.model';
import { CustomCard } from './custom-card.model';

export const selectCards = createFeatureSelector<SearchItem[]>('items');

export const selectCustomCard =
  createFeatureSelector<CustomCard[]>('custom cards');

export const selectHearts = createFeatureSelector<SearchItem[]>('hearts');

export const selectHeartsIds = createSelector(selectHearts, hearts => {
  return hearts.map(heart => heart.id);
});

export const selectPageNumber = createFeatureSelector<number>('page number');
