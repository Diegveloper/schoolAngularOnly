import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.services';
import { map, tap } from 'rxjs';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const token = localStorage.getItem('token');
    let validToken: Boolean = false;

    if(!token){
      const url = router.createUrlTree(['/auth/login']);
      return url;
    }
    authService.validateToken(token).subscribe();

    console.log(authService.validateToken(token));
    return authService.validateToken(token).pipe(
      map(isValid => {
        if(!isValid){

          return router.createUrlTree(['/auth/login']);
        }

        return isValid;
      })
    );

}

export const authGuardMatch: CanMatchFn = (route: Route, segments: UrlSegment[])=>{
  return true;
}
