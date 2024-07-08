import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { YoutubeService } from '../../youtube/youtube.service';

@Component({
  selector: 'app-search-input-field',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './search-input-field.component.html',
  styleUrl: './search-input-field.component.scss',
  animations: [
    trigger('changeBackgroundColour', [
      state(
        'initial',
        style({
          backgroundColor: 'white',
        })
      ),
      state(
        'coloured',
        style({
          backgroundColor: '#ff79e9',
          color: 'oklch(100% 0 0)',
          'border-color': 'oklch(0% 0 0)',
        })
      ),
      transition('initial => coloured', [animate('0.4s')]),
      transition('coloured => initial', [animate('0.4s')]),
    ]),
  ],
})
export class SearchInputFieldComponent {
  isBackgroundRecoloured = true;
  inputValue = '';
  @Output() fakeSearch = new EventEmitter<string>();

  constructor(private youtubeService: YoutubeService) {}

  recolour() {
    this.isBackgroundRecoloured = !this.isBackgroundRecoloured;
  }

  inputSearch(value: string) {
    // const inputTarget = event.target as HTMLInputElement;
    this.inputValue = value;
    this.youtubeService.catchHeaderInputSearchValue(value);
  }
}
