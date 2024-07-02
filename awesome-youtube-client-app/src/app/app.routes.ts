import { Routes } from '@angular/router';
import { CardDetailsComponent } from './youtube/card-details/card-details.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { SearchResultsComponent } from './youtube/search/search-results/search-results.component';

export const routes: Routes = [
  { component: SearchResultsComponent, path: '', title: 'main' },
  { component: LoginComponent, path: 'login', title: 'login' },
  { component: CardDetailsComponent, path: 'card', title: 'card' },
  //{ component: CardDetailsComponent, path: 'card/:id', title: 'card' },
  { component: NotFoundComponent, path: '404', title: '404' }
];
