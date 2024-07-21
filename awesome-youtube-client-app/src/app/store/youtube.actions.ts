import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { SearchItem } from '../youtube/search/search-item.model';
import { CustomCard } from './custom-card.model';

export const YoutubeActions = createActionGroup({
  source: 'Youtube API',
  events: {
    'Get Cards': props<{ value: string }>(),
    'Get Cards Success': props<{ items: SearchItem[] }>(),
    'Retrieved Cards': props<{ items: SearchItem[] }>(),
    'Cards Loaded Error': emptyProps(),
  },
});

export const CustomCardActions = createActionGroup({
  source: 'Custom Card',
  events: {
    'Create Card': props<{ item: CustomCard }>(),
    'Delete Card': props<{ id: string }>(),
  },
});

export const HeartsActions = createActionGroup({
  source: 'Favourite',
  events: {
    'Add Heart': props<{ card: SearchItem }>(),
    'Delete Heart': props<{ cardId: string }>(),
  },
});

export const PaginationButtonsActions = createActionGroup({
  source: 'Pagination Buttons',
  events: {
    'Next Page': emptyProps(),
    'Previous Page': emptyProps(),
    'Initial Page': emptyProps(),
  },
});
