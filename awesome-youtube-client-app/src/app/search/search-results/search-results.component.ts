import { Component, Input } from '@angular/core';
import * as cards from '../../../../response.json';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { SearchItemComponent } from '../search-item/search-item.component';
import { WordsPipePipe } from '../../words-pipe.pipe';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, MatIcon, SearchItemComponent, WordsPipePipe],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  responseCards = cards.items;
  @Input() filterValueDownFromApp = '';
  gotFilterValue = '';
}
