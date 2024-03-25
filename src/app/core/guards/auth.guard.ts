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

  console.log(
    'isAuthenticated: ',
    auth.isAuthenticated(),
    localStorage.getItem('user-jwt-token')
  );

  // if (!auth.isAuthenticated()) {
  //   console.log('guard is reject request');

  // Чомусь спрацьовує гвард при логіні

  //   router.navigate(['/auth/login']);
  //   return false;
  // }

  return true;
};
