import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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
import { debounceTime, fromEvent, map } from 'rxjs';
import { SearchItem } from '../../youtube/search/search-item.model';

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
  @ViewChild('input') inputElement!: ElementRef;
  @Output() search = new EventEmitter<string>();
  realAPICards: SearchItem[] = [];

  constructor(private youtubeService: YoutubeService) {}

  ngAfterViewInit() {
    fromEvent<KeyboardEvent>(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        map((input: KeyboardEvent) => {
          if (input?.target instanceof HTMLInputElement) {
            return input.target?.value;
          } else return '';
        })
        //filter((value: string) => value.length > 2)
      )
      .subscribe(value => {
        return value !== undefined &&
          this.youtubeService.getRealAPICards(value).subscribe(data => {
            //this.realAPICards = data.items;
            this.youtubeService.passCards(data.items);
          });
      });
  }

  recolour() {
    this.isBackgroundRecoloured = !this.isBackgroundRecoloured;
  }

  /* inputSearch(value: string) {
    // const inputTarget = event.target as HTMLInputElement;
    this.inputValue = value;
    this.youtubeService.catchHeaderInputSearchValue(value);
  } */
}
