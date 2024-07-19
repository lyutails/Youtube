import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

import { YoutubeService } from '../youtube/youtube.service';
import { YoutubeActions } from './youtube.actions';

@Injectable()
export class YoutubeEffects {
  constructor(
    private actions$: Actions,
    private youtubeService: YoutubeService
  ) {}

  loadCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeActions.getCards),
      exhaustMap(action => {
        return this.youtubeService.getRealAPICards(action.value).pipe(
          map(response => {
            console.log(response);
            return YoutubeActions.retrievedCards({ items: response.items });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });
}

/* catchError(() => of({ type: '[Youtube API] Cards Loaded Error' })) */
