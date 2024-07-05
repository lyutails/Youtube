import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { SearchItem } from '../search/search-item.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { WordsPipePipe } from '../../pipes/words-pipe.pipe';
import { ColouredByDateBorderDirective } from '../../directives/coloured-by-date-border.directive';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CutDatePipe } from '../../pipes/cut-date.pipe';

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
    CutDatePipe
  ],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss',
})
export class CardDetailsComponent implements OnInit {
  protected isFavourite = false;
  buttonName = 'more...';
  card: SearchItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private youtubeService: YoutubeService,
    private router: Router
  ) {}

  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');
    if (cardId !== null) {
      this.card = this.youtubeService.getCard(cardId);
    }
    if (!cardId || !this.card) {
      this.router.navigate(['/404']);
    }
  }
}
