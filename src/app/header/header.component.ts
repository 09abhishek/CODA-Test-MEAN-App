import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authListenerSubscription : Subscription;
  userIsAuthenticated: boolean = false;
  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    this.userIsAuthenticated = this.loginService.isloggedIn();
   this.authListenerSubscription = this.loginService.getAuthStatusListener().subscribe(isAuthtenticated => {
     this.userIsAuthenticated = isAuthtenticated;
   });
  }

  logout() {
  this.loginService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubscription.unsubscribe();
  }

}
