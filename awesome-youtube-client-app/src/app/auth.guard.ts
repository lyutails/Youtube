import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { LoginService } from './auth/login.service';

export const authGuard: CanActivateFn = (): boolean | UrlTree => {
  const router = inject(Router);
  const service = inject(LoginService);

  if (service.isAuth) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
