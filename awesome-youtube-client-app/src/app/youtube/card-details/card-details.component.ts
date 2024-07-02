import { Component, Input } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { SearchItem } from '../search/search-item.model';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent {
  @Input()
  card!: SearchItem;

  constructor(private youtubeService: YoutubeService) {
  }

  set id(cardId: number) {
    this.card = this.youtubeService.getCard(cardId);
  }

}
