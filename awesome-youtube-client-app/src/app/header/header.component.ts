import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { SearchInputFieldComponent } from '../search-input-field/search-input-field.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, SearchInputFieldComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'YouTube-client-app';
  state = true;

  @Output() settingsToggle = new EventEmitter<boolean>();

  public toggleFilters() {
    this.state = !this.state;
    this.settingsToggle.emit(this.state);
  }
}
