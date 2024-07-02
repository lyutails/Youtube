import { Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  /* { component: HomePage, path: '', data: {animation: 'HomePage'} } */
  { component: SearchResultsComponent, path: '', title: 'main' },
  { component: LoginComponent, path: 'login', title: 'login' },
  { component: CardDetailsComponent, path: 'card/:id', title: 'card' },
  { component: NotFoundComponent, path: '404', title: '404' }
];
