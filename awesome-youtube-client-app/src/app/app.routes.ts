import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

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
    canActivate: [authGuard],
    loadComponent: () =>
      import('./youtube/search/search-results/search-results.component').then(
        m => m.SearchResultsComponent
      ),
  },
  {
    path: 'card/:id',
    title: 'card',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./youtube/card-details/card-details.component').then(
        m => m.CardDetailsComponent
      ),
  },
  {
    path: 'admin',
    title: 'admin',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./core/admin/admin.component').then(m => m.AdminComponent),
  },
  {
    path: 'favourite',
    title: 'favourite',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./core/favourite/favourite.component').then(m => m.FavouriteComponent),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    title: '404',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./core/not-found/not-found.component').then(
        m => m.NotFoundComponent
      ),
  },
];
