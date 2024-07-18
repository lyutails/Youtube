import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';

import { selectCards } from '../../../app/store/youtube.selectors';
import { ColouredByDateBorderDirective } from '../../../directives/coloured-by-date-border.directive';
import { DateAscPipe } from '../../../pipes/date-asc.pipe';
import { DateDescPipe } from '../../../pipes/date-desc.pipe';
import { ViewsCountAscPipe } from '../../../pipes/views-count-asc.pipe';
import { ViewsCountDescPipe } from '../../../pipes/views-count-desc.pipe';
import { WordsPipePipe } from '../../../pipes/words-pipe.pipe';
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
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent {
  gotFilterValue = '';
  responseCardsOnRequest: SearchItem[] = [];
  realAPICards: SearchItem[] = [];
  items$ = this.store.select(selectCards)!;

  @Input() filterValueDownFromApp = '';
  @Input() fakeSearchDownFromApp = '';
  @Input() getFakeSearchValue = '';
  @Input() gotViewsCountAcsOrder = true;
  @Input() gotViewsCountDescOrder = true;
  @Input() gotDateAsc = true;
  @Input() gotDateDesc = true;

  constructor(
    public youtubeService: YoutubeService,
    public store: Store
  ) {}

  /* ngOnInit() {
    if (!this.items$) {
      this.items$ = this.store.select(selectCards);
    }
  } */

  getCardsBasedOnHeaderInputValue(): SearchItem[] {
    return this.realAPICards;
  }
}
