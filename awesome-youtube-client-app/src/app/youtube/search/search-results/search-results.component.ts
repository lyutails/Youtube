import { Component, Input, OnInit, inject } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';

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
export class SearchResultsComponent implements OnInit {
  @Input() filterValueDownFromApp = '';
  gotFilterValue = '';
  @Input() fakeSearchDownFromApp = '';
  @Input() getFakeSearchValue = '';
  responseCardsOnRequest: SearchItem[] = [];
  @Input() gotViewsCountAcsOrder = true;
  @Input() gotViewsCountDescOrder = true;
  @Input() gotDateAsc = true;
  @Input() gotDateDesc = true;
  // youtubeFakeCards: SearchItem[];
  public http = inject(HttpClient);
  realAPICards: SearchItem[] = [];

  constructor(public youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.youtubeService.getRealAPICards().subscribe(data => {
      this.realAPICards = data.items;
    });
  }

  getCardsBasedOnHeaderInputValue(): SearchItem[] {
    return this.realAPICards;
    /* .filter(item =>
          item.snippet.title.toLowerCase().includes(value)
        ); */
  }
}
