import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private loginService: LoginService,
              private router: Router) {
  }

  canActivate(): boolean {
    console.log(this.loginService.isLoggedInUserRole());
    if (this.loginService.isLoggedInUserRole() == 'administrator') {
      return true;
    } else {
      this.router.navigate(['/moviePortal']);
      return false;
    }
  }
}
