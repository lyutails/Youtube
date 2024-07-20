import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { debounceTime, filter, fromEvent, map } from 'rxjs';

import { YoutubeActions } from '../../store/youtube.actions';
import { selectCards } from '../../store/youtube.selectors';
import { SearchItem } from '../../youtube/search/search-item.model';
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
export class SearchInputFieldComponent implements AfterViewInit {
  isBackgroundRecoloured = true;
  inputValue = '';
  realAPICards: SearchItem[] = [];
  items$ = this.store.select(selectCards);

  @Output() search = new EventEmitter<string>();

  @ViewChild('input') inputElement!: ElementRef;

  constructor(
    private youtubeService: YoutubeService,
    private store: Store
  ) {}

  ngAfterViewInit() {
    fromEvent<KeyboardEvent>(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((input: KeyboardEvent) => {
          if (input?.target instanceof HTMLInputElement) {
            return input.target?.value;
          }
          return '';
        }),
        filter((value: string) => value.length > 3)
      )
      .subscribe(value => {
        return (
          value !== undefined &&
          /* this.youtubeService.getCards(data.items); */
          this.store.dispatch(YoutubeActions.getCards({ value }))
        );
      });
  }

  recolour() {
    this.isBackgroundRecoloured = !this.isBackgroundRecoloured;
  }
}
