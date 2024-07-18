import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { SearchItem } from '../youtube/search/search-item.model';
import { CustomCard } from './custom-card.model';

export const YoutubeActions = createActionGroup({
  source: 'Youtube API',
  events: {
    'Get Cards': props<{ value: string }>(),
    'Retrieved Cards': props<{ items: SearchItem[] }>(),
    'Cards Loaded Error': emptyProps(),
  },
});

export const CustomCardActions = createActionGroup({
  source: 'Custom Card',
  events: {
    'Create Card': props<{ item: CustomCard }>(),
  },
});

export const HeartsActions = createActionGroup({
  source: 'Favourite',
  events: {
    'Add Heart': props<{ card: SearchItem }>(),
    'Delete Heart': props<{ cardId: string }>(),
  },
});
