import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-search-input-field',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './search-input-field.component.html',
  styleUrl: './search-input-field.component.scss',
  animations: [
    trigger('changeBackgroundColour', [
      state(
        'initial',
        style({
          backgroundColor: 'white',
        }),
      ),
      state(
        'coloured',
        style({
          backgroundColor: '#ff79e9',
          color: 'oklch(100% 0 0)',
          'border-color': 'oklch(0% 0 0)',
        }),
      ),
      transition('initial => coloured', [animate('0.4s')]),
      transition('coloured => initial', [animate('0.4s')]),
    ]),
  ],
})
export class SearchInputFieldComponent {
  isBackgroundRecoloured = true;
  recolour() {
    this.isBackgroundRecoloured = !this.isBackgroundRecoloured;
  }
}
