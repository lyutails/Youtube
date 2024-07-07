import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { SearchItemComponent } from '../search-item/search-item.component';
import { SearchItem } from '../search-item.model';
import { WordsPipePipe } from '../../../pipes/words-pipe.pipe';
import { ColouredByDateBorderDirective } from '../../../directives/coloured-by-date-border.directive';
import { ViewsCountAscPipe } from '../../../pipes/views-count-asc.pipe';
import { ViewsCountDescPipe } from '../../../pipes/views-count-desc.pipe';
import { DateAscPipe } from '../../../pipes/date-asc.pipe';
import { DateDescPipe } from '../../../pipes/date-desc.pipe';
import { YoutubeService } from '../../youtube.service';

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
  @Input() filterValueDownFromApp = '';
  gotFilterValue = '';
  @Input() fakeSearchDownFromApp = '';
  @Input() getFakeSearchValue = '';
  responseCardsOnRequest: SearchItem[] = [];
  @Input() gotViewsCountAcsOrder = true;
  @Input() gotViewsCountDescOrder = true;
  @Input() gotDateAsc = true;
  @Input() gotDateDesc = true;
  youtubeFakeCards: SearchItem[];

  constructor(public youtubeService: YoutubeService) {
    this.youtubeFakeCards = this.youtubeService.getCards();
  }

  getCardsBasedOnHeaderInputValue(value: string): SearchItem[] {
    return value === ''
      ? []
      : this.youtubeFakeCards.filter(
          item =>
            item.snippet.title.toLowerCase().includes(value) &&
            this.responseCardsOnRequest.push(item)
        );
  }
}
