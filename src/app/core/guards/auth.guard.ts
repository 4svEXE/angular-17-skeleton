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

  const userIdFromUrl = route.params['id'] || '';

  console.log(
    '!auth.isAuthenticated() userIdFromUrl: ',
    !auth.isAuthenticated(),
    auth.isCorrectId(userIdFromUrl)
  );

  if (!auth.isAuthenticated() || auth.isCorrectId(userIdFromUrl)) {
    router.navigate(['']);
    return false;
  }

  return true;
};
