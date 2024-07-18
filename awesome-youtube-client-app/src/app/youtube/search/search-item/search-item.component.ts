import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { HeartsActions } from '../../../app/store/youtube.actions';
import { ColouredByDateBorderDirective } from '../../../directives/coloured-by-date-border.directive';
import { WordsPipePipe } from '../../../pipes/words-pipe.pipe';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';
import { YoutubeService } from '../../youtube.service';
import { SearchItem } from '../search-item.model';

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
  protected isFavourite = false;
  buttonName = 'more...';

  @Input() filterByWordSearchResults = '';
  @Input() card!: SearchItem;

  constructor(
    private router: Router,
    public youtubeService: YoutubeService,
    public store: Store
  ) {}

  goToCard(id: string) {
    this.router.navigate(['/card', id]);
  }

  countFavourites() {
    this.isFavourite = !this.isFavourite;
    this.store.dispatch(HeartsActions.addHeart({ card: this.card }));
  }
}
