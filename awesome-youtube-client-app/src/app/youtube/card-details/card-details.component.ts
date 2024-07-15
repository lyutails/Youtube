import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

import { ColouredByDateBorderDirective } from '../../directives/coloured-by-date-border.directive';
import { LoadingService } from '../../interceptors/loading.service';
import { CutDatePipe } from '../../pipes/cut-date.pipe';
import { WordsPipePipe } from '../../pipes/words-pipe.pipe';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { SearchItem } from '../search/search-item.model';
import { YoutubeService } from '../youtube.service';

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
    CutDatePipe,
  ],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss',
})
export class CardDetailsComponent implements OnInit {
  protected isFavourite = false;
  buttonName = 'more...';
  card!: SearchItem;
  returnBackButtonName = 'back';

  constructor(
    private route: ActivatedRoute,
    public youtubeService: YoutubeService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');
    if (!cardId) {
      this.router.navigate(['/404']);
      return;
    }
    setTimeout(() => {
      this.youtubeService.getRealDetailedCard(cardId).subscribe(data => {
        if (data.items[0]) {
          this.card = data.items[0];
        } else {
          this.router.navigate(['/404']);
        }
      });
    }, 100);
  }

  navigateToMain() {
    this.router.navigate(['/main']);
  }
}
