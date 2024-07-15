import { render, screen } from '@testing-library/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render YouTube-client-app title', async () => {
    await render(AppComponent);
    await screen.getByText('YouTube-client-app');
  });

  it('should render Settings', async () => {
    await render(AppComponent);
    await screen.getByText('Filters');
  });
});
