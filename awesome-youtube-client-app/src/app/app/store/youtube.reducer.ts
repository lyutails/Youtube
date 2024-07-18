import { createReducer, on } from '@ngrx/store';

import { SearchItem } from '../../youtube/search/search-item.model';
import { HeartsActions, YoutubeActions } from './youtube.actions';

export const youtubeFeatureKey = 'youtube';

export const initialStateYoutube: SearchItem[] = [];

export const youtubeReducer = createReducer(
  initialStateYoutube,
  on(YoutubeActions.retrievedCards, (_state, { items }): SearchItem[] => {
    return items;
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
