import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const username = this.authService.getUsername();
    const password = this.authService.getPassword();

    if (username === 'admin@admin.com' && password === '123123') {
      console.log('Login başarılı. Guarddan geçti');
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
