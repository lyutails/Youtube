import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { ColouredByDateBorderDirective } from '../../../directives/coloured-by-date-border.directive';
import { WordsPipePipe } from '../../../pipes/words-pipe.pipe';
import { HeartsActions } from '../../../store/youtube.actions';
import { selectCards } from '../../../store/youtube.selectors';
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
export class SearchItemComponent implements OnInit {
  @Input() card!: SearchItem;
  @Input() initialFavoriteValue = false;

  items$ = this.store.select(selectCards);

  buttonName = 'more...';
  protected isFavourite = false;

  constructor(
    private router: Router,
    public youtubeService: YoutubeService,
    public store: Store
  ) {}

  ngOnInit(): void {
    this.isFavourite = this.initialFavoriteValue;
    // if(this.items$.pipe((filter(cards => cards.find((card) => card.id === heartsIds$.)))))
  }

  goToCard(id: string) {
    this.router.navigate(['/card', id]);
  }

  countFavourites() {
    this.isFavourite = !this.isFavourite;
    if (this.isFavourite) {
      this.store.dispatch(HeartsActions.addHeart({ card: this.card }));
    } else {
      this.store.dispatch(HeartsActions.deleteHeart({ cardId: this.card.id }));
    }
  }
}
