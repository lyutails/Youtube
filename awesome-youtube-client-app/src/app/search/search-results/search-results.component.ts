import { Component } from '@angular/core';
import * as cards from '../../../../response.json';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  responseCards = cards.items;

  isFavourite = false;

  loveUnlove() {
    this.isFavourite = !this.isFavourite;
  }
}
