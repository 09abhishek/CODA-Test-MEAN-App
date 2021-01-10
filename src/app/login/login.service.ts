import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiURL} from '../config/common-url';

@Injectable({
  providedIn : 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username: string, pwd: string) {
    return this.http.post(apiURL+'login',{username : username, password: pwd});
  }

  isloggedIn() {
    return !!localStorage.getItem('token');
  }

  isLoggedInUserRole(){
    return localStorage.getItem('user_role');
  }

}
