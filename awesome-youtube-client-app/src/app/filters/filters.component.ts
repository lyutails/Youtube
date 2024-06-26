import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatButton, MatIconModule, MatInput, CommonModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Input() showHideFilters = true;
  @Output() filterByWordValue = new EventEmitter<string>();
  inputValue = '';
  private SearchSubject = new Subject<string>();
  private readonly debounceTimeMs = 500;

  ngOnInit() {
    this.SearchSubject.pipe(
      debounceTime(this.debounceTimeMs)
    ).subscribe((inputValue) => {
      this.getInputValue(inputValue);
    })
  }

  onSearch(inputValue: string) {
    this.SearchSubject.next(inputValue);
  }

  getInputValue(inputValue: string) {
    // const inputTarget = event.target as HTMLInputElement;
    // this.inputValue = inputTarget?.value;
    console.log(inputValue);
    this.filterByWordValue.emit(inputValue);
    return this.inputValue;
  }

  ngOnDestroy() {
    this.SearchSubject.complete();
  }
 }
