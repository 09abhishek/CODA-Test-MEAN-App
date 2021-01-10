import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import {MatCardModule, MatExpansionModule, MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import {PostsService} from './posts/posts.service';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MoviesPortalComponent } from './movies-portal/movies-portal.component';
import { MoviesInfoComponent } from './movies-info/movies-info.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {AppRoutingModule} from '../app-routing.module';
import {httpInterceptorProviders} from '../http-interceptor';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard} from './auth.guard';
import {AdminAuthGuard} from './adminauth.guard';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    LoginComponent,
    AdminDashboardComponent,
    MoviesPortalComponent,
    MoviesInfoComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    AppRoutingModule,
    NgbRatingModule
  ],
  providers: [PostsService,AuthGuard, AdminAuthGuard, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
