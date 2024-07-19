import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-pagination-buttons',
  standalone: true,
  imports: [MatIcon],
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
}
