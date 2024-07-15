import {
  Component,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { YoutubeService } from '../../youtube/youtube.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatButton, MatIconModule, MatInput, CommonModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit, OnDestroy {
  showHideFilters = true;
  @Output() filterByWordValue = new EventEmitter<string>();
  inputValue = '';
  private SearchSubject = new Subject<string>();
  private readonly debounceTimeMs = 500;
  isViewsCountAsc = true;
  @Output() viewsCountAsc = new EventEmitter<boolean>();
  isViewsCountDesc = true;
  @Output() viewsCountDesc = new EventEmitter<boolean>();
  isDateAsc = true;
  @Output() dateAsc = new EventEmitter<boolean>();
  isDateDesc = true;
  @Output() dateDesc = new EventEmitter<boolean>();
  public screenWidth!: number;
  public screenHeight!: number;

  constructor(public youtubeService: YoutubeService) {}

  ngOnInit() {
    this.SearchSubject.pipe(debounceTime(this.debounceTimeMs)).subscribe(
      inputValue => {
        this.getInputValue(inputValue);
      }
    );
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  onSearch(inputValue: string) {
    this.SearchSubject.next(inputValue);
  }

  getInputValue(inputValue: string) {
    // const inputTarget = event.target as HTMLInputElement;
    // this.inputValue = inputTarget?.value;
    // this.filterByWordValue.emit(inputValue);
    return this.youtubeService.catchFilterInputSearchValue(inputValue);
  }

  viewsSortOrderAsc() {
    this.isViewsCountAsc = !this.isViewsCountAsc;
    // this.viewsCountAsc.emit(this.isViewsCountAsc);
    this.youtubeService.sortViewsAsc(this.isViewsCountAsc);
  }

  viewsSortOrderDesc() {
    this.isViewsCountDesc = !this.isViewsCountDesc;
    // this.viewsCountDesc.emit(this.isViewsCountDesc);
    this.youtubeService.sortViewsDesc(this.isViewsCountDesc);
  }

  dateSortAsc() {
    this.isDateAsc = !this.isDateAsc;
    // this.dateAsc.emit(this.isDateAsc);
    this.youtubeService.sortDateAsc(this.isDateAsc);
  }

  dateSortDesc() {
    this.isDateDesc = !this.isDateDesc;
    // this.dateDesc.emit(this.isDateDesc);
    this.youtubeService.sortDateDesc(this.isDateDesc);
  }

  ngOnDestroy() {
    this.SearchSubject.complete();
  }

  isFiltersPanelPresent() {
    return this.screenWidth > 1000 || this.youtubeService.isFiltersVisible;
  }
}
