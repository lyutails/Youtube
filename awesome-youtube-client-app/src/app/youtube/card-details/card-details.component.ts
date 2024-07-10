import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { SearchItem } from '../search/search-item.model';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { WordsPipePipe } from '../../pipes/words-pipe.pipe';
import { ColouredByDateBorderDirective } from '../../directives/coloured-by-date-border.directive';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { CutDatePipe } from '../../pipes/cut-date.pipe';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');
    if (!cardId) {
      this.router.navigate(['/404']);
      return;
    }
    this.youtubeService.getRealDetailedCard(cardId).subscribe(data => {
      if (data.items[0]) {
        this.card = data.items[0];
      } else {
        this.router.navigate(['/404']);
      }
    });
  }

  navigateToMain() {
    this.router.navigate(['/main']);
  }
}
