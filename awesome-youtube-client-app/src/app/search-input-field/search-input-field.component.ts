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
          backgroundColor: 'pink',
        }),
      ),
      state(
        'clicked',
        style({
          backgroundColor: 'white',
        }),
      ),
      transition('initial => clicked', [animate('1s')]),
      transition('clicked => initial', [animate('1s')]),
    ]),
  ],
})
export class SearchInputFieldComponent {
  isBackgroundRecoloured = true;
  recolour() {
    this.isBackgroundRecoloured = !this.isBackgroundRecoloured;
  }
}
