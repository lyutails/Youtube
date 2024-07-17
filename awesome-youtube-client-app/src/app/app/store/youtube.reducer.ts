import { createReducer, on } from '@ngrx/store';

import { SearchItem } from '../../youtube/search/search-item.model';
import { HeartsActions, YoutubeActions } from './youtube.actions';

export const youtubeFeatureKey = 'youtube';

export const initialStateYoutube: SearchItem[] = [];

export const youtubeReducer = createReducer(
  initialStateYoutube,
  on(YoutubeActions.retrievedCardsList, (_state, { items }): SearchItem[] => {
    return items;
  })
);

export const initialStateHearts: string[] = [];

export const heartsReducer = createReducer(
  initialStateHearts,
  on(HeartsActions.addHeart, (state, { cardId }) =>
    state.filter(id => id !== cardId)
  ),
  on(HeartsActions.deleteHeart, (state, { cardId }) =>
    state.filter(id => id !== cardId)
  )
);
