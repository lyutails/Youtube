import { YoutubeService } from './../../youtube.service';
import { Component, Input } from '@angular/core';
import { SearchItem } from '../search-item.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { WordsPipePipe } from '../../../pipes/words-pipe.pipe';
import { ColouredByDateBorderDirective } from '../../../directives/coloured-by-date-border.directive';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';

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
