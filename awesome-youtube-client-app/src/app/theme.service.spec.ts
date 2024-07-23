import { ThemeService } from './theme.service';

describe('LoginService', () => {
  let themeService: ThemeService;

  beforeEach(() => {
    themeService = new ThemeService();
  });

  it('#removeCredentials should return undefined from ls', () => {
    expect(themeService.switchTheme()).toBe(true || false);
  });
});
