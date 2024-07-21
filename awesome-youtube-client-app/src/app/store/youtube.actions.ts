import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { SearchItem } from '../youtube/search/search-item.model';
import { CustomCard } from './custom-card.model';

export const YoutubeActions = createActionGroup({
  source: 'Youtube API',
  events: {
    getCards: props<{ value: string }>(),
    retrievedCards: props<{ items: SearchItem[] }>(),
    getCardsSuccess: props<{ items: SearchItem[] }>(),
    getCardsError: emptyProps(),
  },
});

export const CustomCardActions = createActionGroup({
  source: 'Custom Card',
  events: {
    createCard: props<{ item: CustomCard }>(),
    deleteCard: props<{ id: string }>(),
  },
});

export const HeartsActions = createActionGroup({
  source: 'Favourite',
  events: {
    addHeart: props<{ card: SearchItem }>(),
    deleteHeart: props<{ cardId: string }>(),
  },
});

export const PaginationButtonsActions = createActionGroup({
  source: 'Pagination Buttons',
  events: {
    nextPage: emptyProps(),
    previousPage: emptyProps(),
    initialPage: emptyProps(),
  },
});
