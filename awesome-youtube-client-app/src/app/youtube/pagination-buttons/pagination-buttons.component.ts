import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';

import { PaginationButtonsActions } from '../../store/youtube.actions';
import { selectPageNumber } from '../../store/youtube.selectors';

@Component({
  selector: 'app-pagination-buttons',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './pagination-buttons.component.html',
  styleUrl: './pagination-buttons.component.scss',
})
export class PaginationButtonsComponent {
  currentPage = 1;
  paginationButtonSymbols = {
    first: 'keyboard_double_arrow_left',
    previous: 'keyboard_arrow_left',
    current: this.currentPage,
    next: 'keyboard_arrow_right',
    last: 'keyboard_double_arrow_right',
  };
  nextPageToken = 1;

  store = inject(Store);
  currentPageNumber$ = this.store.select(selectPageNumber);

  turnNextPage() {
    this.store.dispatch(PaginationButtonsActions.nextPage());
  }

  turnPreviousPage() {
    this.store.dispatch(PaginationButtonsActions.previousPage());
  }
}
