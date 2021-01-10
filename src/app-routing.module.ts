import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './app/login/login.component';
import {AdminDashboardComponent} from './app/admin-dashboard/admin-dashboard.component';
import {MoviesPortalComponent} from './app/movies-portal/movies-portal.component';
import {MoviesInfoComponent} from './app/movies-info/movies-info.component';
import {NotFoundPageComponent} from './app/not-found-page/not-found-page.component';
import {AuthGuard} from './app/auth.guard';
import {AdminAuthGuard} from './app/adminauth.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'moviePortal', component:MoviesPortalComponent, canActivate: [AuthGuard] },
  { path: 'movieInfo/:id', component: MoviesInfoComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', component: NotFoundPageComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
