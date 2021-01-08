import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../posts/posts.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginform: NgForm;
  uname = '';
  pwd = '';
  constructor(public postService: PostsService,private router: Router,) { }

  ngOnInit() {
  }
  onSubmit() {
    this.uname = this.loginform.value.userData.userID.toString();
    this.pwd = this.loginform.value.userData.password.toString();

    if(this.uname && this.pwd) {
      this.router.navigateByUrl('/moviePortal');
    } else {
      this.router.navigateByUrl('');
    }
  }


}
