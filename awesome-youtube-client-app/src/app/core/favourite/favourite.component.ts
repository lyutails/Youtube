import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ColouredByDateBorderDirective } from '../../directives/coloured-by-date-border.directive';
import { selectHearts } from '../../store/youtube.selectors';
import { SearchItem } from '../../youtube/search/search-item.model';
import { SearchItemComponent } from '../../youtube/search/search-item/search-item.component';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [SearchItemComponent, CommonModule, ColouredByDateBorderDirective],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss',
})
export class FavouriteComponent {
  id!: string;
  cards!: SearchItem[];
  hearts$ = this.store.select(selectHearts);

  constructor(private store: Store) {}
}
