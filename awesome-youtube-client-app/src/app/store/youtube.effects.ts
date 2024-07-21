import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

import { YoutubeService } from '../youtube/youtube.service';
import { PaginationButtonsActions, YoutubeActions } from './youtube.actions';

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
            return YoutubeActions.getCardsSuccess({ items: response.items });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  setInitalCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeActions.getCardsSuccess),
      map(({ items }) => YoutubeActions.retrievedCards({ items }))
    );
  });

  setInitalPage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(YoutubeActions.getCardsSuccess),
      map(() => {
        return PaginationButtonsActions.initialPage();
      })
    );
  });

  // PaginationButtonsActions.initialPage

  loadNextCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PaginationButtonsActions.nextPage),
      exhaustMap(() => {
        return this.youtubeService.getPaginationRealAPICards('next').pipe(
          map(response => {
            return YoutubeActions.retrievedCards({ items: response.items });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  loadPrevCards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PaginationButtonsActions.previousPage),
      exhaustMap(() => {
        return this.youtubeService.getPaginationRealAPICards('prev').pipe(
          map(response => {
            return YoutubeActions.retrievedCards({ items: response.items });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
