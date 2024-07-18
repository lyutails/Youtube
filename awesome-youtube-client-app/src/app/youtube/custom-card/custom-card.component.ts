import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CustomCard } from '../../store/custom-card.model';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss',
})
export class CustomCardComponent {
  @Input() customCard!: CustomCard;
}
