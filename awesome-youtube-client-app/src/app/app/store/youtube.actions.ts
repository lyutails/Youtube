import { createActionGroup, props } from '@ngrx/store';

import { SearchItem } from '../../youtube/search/search-item.model';

export const YoutubeActions = createActionGroup({
  source: 'Youtube API',
  events: {
    'Retrieved Cards List': props<{ items: SearchItem[] }>(),
  },
});

export const HeartsActions = createActionGroup({
  source: 'Youtube',
  events: {
    'Add Heart': props<{ cardId: string }>(),
    'Delete Heart': props<{ cardId: string }>(),
  },
});
