import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { WebSocketService } from '../services/web-socket.service';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService,
              private router: Router,
              private webSocket: WebSocketService) {
  }

  showErrorMsg = false;

  ngOnInit() {
    this.webSocket.listen('some event').subscribe((data) => {
      console.log(data);
    })
  }

  form = new FormGroup({
    // "name" : new FormControl("", Validators.required)

  })

  onLogin(form: NgForm) {
    this.showErrorMsg = false;
    if (form.valid) {
      this.loginService.login(form.value.username, form.value.password)
        .subscribe((data) => {
          if (data['status']) {
            this.loginService.setExpirationDuration(data['expiresIn']);
            localStorage.setItem('token', data['accessToken']);
            localStorage.setItem('user_id', data['result'].user_id);
            localStorage.setItem('user_name', data['result'].user_name);
            localStorage.setItem('user_role', data['result'].user_role);
            this.loginService.setToken(true);

            if (data['result'].user_role == 'administrator') {
              this.router.navigateByUrl('/adminDashboard');
            } else {
              this.router.navigateByUrl('/moviePortal');
            }
          } else {
            this.showErrorMsg = true;
          }
        });
    } else {
      return;
    }
  }
}
