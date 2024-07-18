import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { YoutubeEffects } from './app/store/youtube.effects';
import { heartsReducer, youtubeReducer } from './app/store/youtube.reducer';
import { loadingSpinnerInterceptor } from './interceptors/loading-spinner.interceptor';
import { shortenUrlInterceptor } from './interceptors/shorten-url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([shortenUrlInterceptor, loadingSpinnerInterceptor])
    ),
    provideStore(),
    provideState({
      name: 'items',
      reducer: youtubeReducer,
    }),
    provideState({
      name: 'hearts',
      reducer: heartsReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
    provideEffects([YoutubeEffects]),
  ],
};
/* provideStore({ items: youtubeReducer, hearts: heartsReducer }); */
