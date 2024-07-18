import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

import { CutCustomDatePipe } from '../../pipes/cut-custom-date.pipe';
import { CustomCard } from '../../store/custom-card.model';
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

  buttonNameMore = 'more';
  buttonNameDelete = 'delete';

  goToCard(id: string) {
    this.router.navigate(['/card', id]);
  }
}
