import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { SearchItem } from '../../youtube/search/search-item.model';

export const YoutubeActions = createActionGroup({
  source: 'Youtube API',
  events: {
    'Get Cards': props<{ value: string }>(),
    'Retrieved Cards': props<{ items: SearchItem[] }>(),
    'Cards Loaded Error': emptyProps(),
  },
});

export const HeartsActions = createActionGroup({
  source: 'Youtube',
  events: {
    'Add Heart': props<{ card: SearchItem }>(),
    'Delete Heart': props<{ cardId: string }>(),
  },
});
