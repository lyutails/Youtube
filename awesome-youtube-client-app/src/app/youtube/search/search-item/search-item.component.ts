import { Component, Input } from '@angular/core';
import { SearchItem } from '../search-item.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { WordsPipePipe } from '../../../pipes/words-pipe.pipe';
import { ColouredByDateBorderDirective } from '../../../directives/coloured-by-date-border.directive';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    UpperCasePipe,
    ColouredByDateBorderDirective,
    CustomButtonComponent,
    RouterLink,
    RouterOutlet,
    WordsPipePipe,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export class SearchItemComponent {
  @Input() card!: SearchItem;
  protected isFavourite = false;
  buttonName = 'more...';
  @Input() filterByWordSearchResults = '';
  // route: ActivatedRoute = inject(ActivatedRoute);
  youtubeCard!: SearchItem;

  constructor(private router: Router) {}

  goToCard(card: SearchItem) {
    const cardId = card ? card.id : null;
    this.router.navigate(['/card', cardId]);
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
