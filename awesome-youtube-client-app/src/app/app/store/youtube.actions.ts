import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const YoutubeActions = createActionGroup({
  source: 'Youtube',
  events: {
    'Load Youtubes': emptyProps(),
    'Load Youtubes Success': props<{ data: unknown }>(),
    'Load Youtubes Failure': props<{ error: unknown }>(),
  },
});
