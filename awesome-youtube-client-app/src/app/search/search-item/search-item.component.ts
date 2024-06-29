import { Component, Input } from '@angular/core';
import { SearchItem } from '../search-item.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { WordsPipePipe } from '../../pipes/words-pipe.pipe';
import { ColouredByDateBorderDirective } from '../../directives/coloured-by-date-border.directive';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    UpperCasePipe,
    WordsPipePipe,
    ColouredByDateBorderDirective,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export class SearchItemComponent {
  @Input() card!: SearchItem;
  protected isFavourite = false;
  buttonName = 'more...';
  @Input() filterByWordSearchResults = '';

  countFavourites() {
    /* const heart = event?.currentTarget as HTMLButtonElement;
    this.responseCards.map((item) => {
      if (item.id === heart.id) {
        this.favourites.push(item.id);
        this.isFavourite = true;
      }
    });*/

    this.isFavourite = !this.isFavourite;
  }
}
