import { Component, Input } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { SearchItem } from '../search/search-item.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { WordsPipePipe } from '../../pipes/words-pipe.pipe';
import { ColouredByDateBorderDirective } from '../../directives/coloured-by-date-border.directive';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    UpperCasePipe,
    WordsPipePipe,
    ColouredByDateBorderDirective,
    CustomButtonComponent,
  ],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss',
})
export class CardDetailsComponent {
  @Input() card!: SearchItem;
  protected isFavourite = false;
  buttonName = 'more...';

  constructor(private youtubeService: YoutubeService) {}

  set id(cardId: string) {
    this.card = this.youtubeService.getCard(cardId);
  }
}
