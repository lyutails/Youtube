import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../search-item.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { WordsPipePipe } from '../../../pipes/words-pipe.pipe';
import { ColouredByDateBorderDirective } from '../../../directives/coloured-by-date-border.directive';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';
import { YoutubeService } from '../../youtube.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    UpperCasePipe,
    WordsPipePipe,
    ColouredByDateBorderDirective,
    CustomButtonComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export class SearchItemComponent implements OnInit {
  @Input() card!: SearchItem;
  protected isFavourite = false;
  buttonName = 'more...';
  @Input() filterByWordSearchResults = '';
  // route: ActivatedRoute = inject(ActivatedRoute);
  youtubeCard!: SearchItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: YoutubeService
  ) {}

  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');
    if (cardId !== null) {
      this.youtubeCard = this.service.getCard(cardId);
    }
  }

  goToCard(card: SearchItem) {
    const cardId = card ? card.id : null;
    this.router.navigate(['/card', { id: cardId }]);
  }

  countFavourites() {
    /* const heart = event?.currentTarget as HTMLButtonElement;
    this.responseCards.map((item) => {
      if (item.id === heart.id) {
        this.favourites.push(item.id);
        this.isFavourite = true;
      }
    });*/

    this.isFavourite = !this.isFavourite;
  }
}
