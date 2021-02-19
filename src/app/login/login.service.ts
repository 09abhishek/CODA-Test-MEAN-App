import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiURL} from '../config/common-url';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn : 'root'
})
export class LoginService {
  private setExpirationTimer: number = 0
  private authStatusListener = new Subject<boolean>();
  private tokenTimer : any;

  constructor(private router: Router,private http: HttpClient) {
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  login(username: string, pwd: string) {
    return this.http.post(apiURL+'login',{username : username, password: pwd});
  }

  setToken(booleanValue: boolean) {
    this.authStatusListener.next(booleanValue);
  }

  setExpirationDuration(timer) {
    this.setExpirationTimer = timer;
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, this.setExpirationTimer * 1000);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
  }

  isloggedIn() {
    return !!localStorage.getItem('token');
  }

  isLoggedInUserRole(){
    return localStorage.getItem('user_role');
  }

}
