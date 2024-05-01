import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.services';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    if(authService.checkAuthStatus()){
      console.log("in the guard");
      return true;
    }
    else{
      const url = router.createUrlTree(['/auth/login']);
      return url;
    }
}

export const authGuardMatch: CanMatchFn = (route: Route, segments: UrlSegment[])=>{
  return true;
}
