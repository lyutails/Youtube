import { Component, Input, inject } from '@angular/core';
import { SearchItem } from '../search-item.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { WordsPipePipe } from '../../pipes/words-pipe.pipe';
import { ColouredByDateBorderDirective } from '../../directives/coloured-by-date-border.directive';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    UpperCasePipe,
    WordsPipePipe,
    ColouredByDateBorderDirective,
    CustomButtonComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export class SearchItemComponent {
  @Input() card!: SearchItem;
  protected isFavourite = false;
  buttonName = 'more...';
  @Input() filterByWordSearchResults = '';

  route: ActivatedRoute = inject(ActivatedRoute);
  locationID = 0;

  constructor() {
    this.locationID = Number(this.route.snapshot.paramMap.get('id'));
    // this.locationID = Number(this.route.snapshot.params['id']);
  }

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
