import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
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
  ],
};
