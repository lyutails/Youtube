import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let themeService: ThemeService;

  beforeEach(() => {
    themeService = new ThemeService();
  });

  it('#switchTheme should return true or false value', () => {
    expect(themeService.switchTheme()).toBe(true || false);
  });
});
