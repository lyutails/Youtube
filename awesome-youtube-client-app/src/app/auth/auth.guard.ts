import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { LoginService } from './login.service';

export const authGuard: CanActivateFn = (): boolean | UrlTree => {
  const router = inject(Router);
  const service = inject(LoginService);

  if (service.login.value || service.getToken() !== null ) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
