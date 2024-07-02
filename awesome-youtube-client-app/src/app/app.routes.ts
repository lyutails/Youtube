import { Routes } from '@angular/router';
import { CardDetailsComponent } from './youtube/card-details/card-details.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SearchResultsComponent } from './youtube/search/search-results/search-results.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'login',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  //{ component: LoginComponent, path: 'login', title: 'login' },
  { component: SearchResultsComponent, path: 'main', title: 'main' },
  { component: CardDetailsComponent, path: 'card/:id', title: 'card' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { component: NotFoundComponent, path: '**', title: '404' },
];
