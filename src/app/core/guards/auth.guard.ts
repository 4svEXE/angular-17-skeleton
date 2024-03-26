import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const auth: AuthenticationService = inject(AuthenticationService);

  if (auth.getIdFromJWT() && auth.getUserIdFromStorage()) {
    return auth.getIdFromJWT() === auth.getUserIdFromStorage()
      ? true
      : router.navigate(['/auth/login']);
  }

  router.navigate(['/auth/login']);
  return false;
};
