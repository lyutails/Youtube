import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { FiltersComponent } from './core/filters/filters.component';
import { HeaderComponent } from './core/header/header.component';
import { SearchResultsComponent } from './youtube/search/search-results/search-results.component';
import { LoadingService } from './interceptors/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    SearchResultsComponent,
    FiltersComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  loadingService = inject(LoadingService);
}
