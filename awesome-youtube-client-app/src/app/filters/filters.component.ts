import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatButton, MatIconModule, MatInput, CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Input() showHideFilters = true;
  @Output() filterByWordValue = new EventEmitter<string>();
  inputValue = '';

  getInputValue(event: Event) {
    const inputTarget = event.target as HTMLInputElement;
    this.inputValue = inputTarget?.value;
    console.log(this.inputValue);
    this.filterByWordValue.emit(this.inputValue);
    return this.inputValue;
  }

  sendInputValueToApp() {
    this.filterByWordValue.emit(this.inputValue);
  }
}
