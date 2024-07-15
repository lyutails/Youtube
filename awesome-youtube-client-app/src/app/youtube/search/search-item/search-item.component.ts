import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { ColouredByDateBorderDirective } from '../../../directives/coloured-by-date-border.directive';
import { WordsPipePipe } from '../../../pipes/words-pipe.pipe';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';
import { YoutubeService } from '../../youtube.service';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    UpperCasePipe,
    ColouredByDateBorderDirective,
    CustomButtonComponent,
    RouterLink,
    RouterOutlet,
    WordsPipePipe,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
})
export class SearchItemComponent {
  @Input() card!: SearchItem;
  protected isFavourite = false;
  buttonName = 'more...';
  @Input() filterByWordSearchResults = '';
  youtubeCard!: SearchItem;

  constructor(
    private router: Router,
    public youtubeService: YoutubeService
  ) {}

  goToCard(id: string) {
    this.router.navigate(['/card', id]);
  }

  countFavourites() {
    this.isFavourite = !this.isFavourite;
  }
}
