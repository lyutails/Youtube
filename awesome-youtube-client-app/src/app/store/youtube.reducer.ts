import { createReducer, on } from '@ngrx/store';

import { SearchItem } from '../youtube/search/search-item.model';
import { CustomCard } from './custom-card.model';
import {
  CustomCardActions,
  HeartsActions,
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
  })
);

export const initialStateHearts: SearchItem[] = [];

export const heartsReducer = createReducer(
  initialStateHearts,
  on(HeartsActions.addHeart, (state, { card }): SearchItem[] => {
    // if (state.indexOf(card) > -1) return state;
    return [...state, card];
  }),
  on(HeartsActions.deleteHeart, (state, { cardId }) =>
    state.filter(card => card.id === cardId)
  )
);
