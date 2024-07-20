import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';

import { PaginationButtonsActions } from '../../store/youtube.actions';
import { selectPageNumber } from '../../store/youtube.selectors';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-pagination-buttons',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './pagination-buttons.component.html',
  styleUrl: './pagination-buttons.component.scss',
})
export class PaginationButtonsComponent {
  paginationButtonSymbols = {
    previous: 'keyboard_arrow_left',
    next: 'keyboard_arrow_right',
  };
  nextPageToken = 1;

  store = inject(Store);
  currentPageNumber$ = this.store.select(selectPageNumber);
  youtubeService = inject(YoutubeService);

  turnNextPage() {
    this.store.dispatch(PaginationButtonsActions.nextPage());
  }

  turnPreviousPage() {
    this.store.dispatch(PaginationButtonsActions.previousPage());
  }
}
