import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ColouredByDateBorderDirective } from '../../directives/coloured-by-date-border.directive';
import { selectHeartsState } from '../../store/youtube.selectors';
import { SearchItem } from '../../youtube/search/search-item.model';
import { SearchItemComponent } from '../../youtube/search/search-item/search-item.component';
import { YoutubeService } from '../../youtube/youtube.service';

// import { HeartsActions } from '../../app/store/youtube.actions';

@Component({
  selector: 'app-favourite',
  standalone: true,
  imports: [SearchItemComponent, CommonModule, ColouredByDateBorderDirective],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss',
})
export class FavouriteComponent {
  // hearts$: Observable<SearchItem[]>;
  id!: string;
  cards!: SearchItem[];
  hearts$ = this.store.select(selectHeartsState);

  constructor(
    private store: Store,
    private youtubeService: YoutubeService
  ) {
    // this.hearts$ = store.select('hearts');
  }

  getCards() {
    this.cards = this.youtubeService.cards;
    return this.cards;
  }

  /* addHeart() {
    this.store.dispatch(HeartsActions.addHeart(this.id));
  }

  deleteHeart() {
    this.store.dispatch(HeartsActions.deleteHeart(this.id));
  } */
}
