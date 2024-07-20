import { createReducer, on } from '@ngrx/store';

import { SearchItem } from '../youtube/search/search-item.model';
import { CustomCard } from './custom-card.model';
import {
  CustomCardActions,
  HeartsActions,
  PaginationButtonsActions,
  YoutubeActions,
} from './youtube.actions';

export const youtubeFeatureKey = 'youtube';

export const initialStateYoutube: SearchItem[] = [];

export const youtubeReducer = createReducer(
  initialStateYoutube,
  on(YoutubeActions.retrievedCards, (_state, { items }): SearchItem[] => {
    return items;
  })
);

export const initialStateCustomCard: CustomCard[] = [];

export const customCardReducer = createReducer(
  initialStateCustomCard,
  on(CustomCardActions.createCard, (state, { item }): CustomCard[] => {
    return [...state, item];
  }),
  on(CustomCardActions.deleteCard, (state, { id }): CustomCard[] => {
    return state.filter(card => card.customId !== id);
  })
);

export const initialStateHearts: SearchItem[] = [];

export const heartsReducer = createReducer(
  initialStateHearts,
  on(HeartsActions.addHeart, (state, { card }): SearchItem[] => {
    return [...state, card];
  }),
  on(HeartsActions.deleteHeart, (state, { cardId }) =>
    state.filter(card => card.id !== cardId)
  )
);

export const initialPageNumber = 0;

export const paginationButtonsReducer = createReducer(
  initialPageNumber,
  on(PaginationButtonsActions.nextPage, (state): number => {
    return state + 1;
  }),
  on(PaginationButtonsActions.previousPage, (state): number => {
    if (state === 1) {
      return 1;
    }
    return state - 1;
  }),
  on(PaginationButtonsActions.initialPage, (): number => {
    return 1;
  })
);
