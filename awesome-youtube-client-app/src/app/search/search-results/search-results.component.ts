import { Component } from '@angular/core';
import * as cards from '../../../../response.json';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  responseCards = cards.items;
}