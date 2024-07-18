import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { CutCustomDatePipe } from '../../pipes/cut-custom-date.pipe';
import { CustomCard } from '../../store/custom-card.model';
import { CustomCardActions } from '../../store/youtube.actions';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent, CutCustomDatePipe],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss',
})
export class CustomCardComponent {
  @Input() customCard!: CustomCard;

  router = inject(Router);
  store = inject(Store);

  buttonNameMore = 'more';
  buttonNameDelete = 'delete';

  goToCard(id: string) {
    this.router.navigate(['/card', id]);
  }

  deleteCard() {
    this.store.dispatch(
      CustomCardActions.deleteCard({ id: this.customCard.customId })
    );
  }
}
