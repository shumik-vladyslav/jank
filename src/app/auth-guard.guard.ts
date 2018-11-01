import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.code) {
        return true;
      } else {
        window.location.assign(
          "https://cwoauth2.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=6a6irnufprh9v325hll67ncafu&response_type=code&redirect_uri=http://localhost:4200/auth-callback&state=asdasdas&scope=openid&identity_provider=cognito"
        );
        return false;
      }
      
    // return this.authService.code?true:false;
  }
}
