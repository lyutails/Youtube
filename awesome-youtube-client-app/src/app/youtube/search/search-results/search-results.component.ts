import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';

import { ColouredByDateBorderDirective } from '../../../directives/coloured-by-date-border.directive';
import { DateAscPipe } from '../../../pipes/date-asc.pipe';
import { DateDescPipe } from '../../../pipes/date-desc.pipe';
import { ViewsCountAscPipe } from '../../../pipes/views-count-asc.pipe';
import { ViewsCountDescPipe } from '../../../pipes/views-count-desc.pipe';
import { WordsPipePipe } from '../../../pipes/words-pipe.pipe';
import {
  selectCards,
  selectCustomCard,
  selectHeartsIds,
} from '../../../store/youtube.selectors';
import { CustomCardComponent } from '../../custom-card/custom-card.component';
import { YoutubeService } from '../../youtube.service';
import { SearchItem } from '../search-item.model';
import { SearchItemComponent } from '../search-item/search-item.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    SearchItemComponent,
    WordsPipePipe,
    ColouredByDateBorderDirective,
    ViewsCountAscPipe,
    ViewsCountDescPipe,
    DateAscPipe,
    DateDescPipe,
    CustomCardComponent,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  @Input() filterValueDownFromApp = '';
  @Input() fakeSearchDownFromApp = '';
  @Input() getFakeSearchValue = '';
  @Input() gotViewsCountAcsOrder = true;
  @Input() gotViewsCountDescOrder = true;
  @Input() gotDateAsc = true;
  @Input() gotDateDesc = true;

  gotFilterValue = '';
  responseCardsOnRequest: SearchItem[] = [];
  realAPICards: SearchItem[] = [];
  items$ = this.store.select(selectCards);
  customCards$ = this.store.select(selectCustomCard);
  heartsIds$ = this.store.select(selectHeartsIds);

  constructor(
    public youtubeService: YoutubeService,
    public store: Store
  ) {}

  getCardsBasedOnHeaderInputValue(): SearchItem[] {
    return this.realAPICards;
  }
}
