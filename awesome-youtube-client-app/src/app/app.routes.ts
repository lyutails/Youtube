import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes, UrlTree } from '@angular/router';
import { LoginService } from './auth/login.service';

export const loginGuard: CanActivateFn = (): boolean | UrlTree => {
  const router = inject(Router);
  const service = inject(LoginService);

  if (service.isAuth) {
    return true;
  }

  return router.createUrlTree(['/login']);
};

export const routes: Routes = [
  {
    path: 'login',
    title: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'main',
    title: 'main',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./youtube/search/search-results/search-results.component').then(
        m => m.SearchResultsComponent
      ),
  },
  {
    path: 'card',
    title: 'card',
    canActivate: [loginGuard],
    loadComponent: () =>
      import('./youtube/card-details/card-details.component').then(
        m => m.CardDetailsComponent
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    title: '404',
    loadComponent: () =>
      import('./core/not-found/not-found.component').then(
        m => m.NotFoundComponent
      ),
  },
];
