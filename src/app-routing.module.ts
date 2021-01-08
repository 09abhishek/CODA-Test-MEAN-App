import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './app/login/login.component';
import {AdminDashboardComponent} from './app/admin-dashboard/admin-dashboard.component';
import {MoviesPortalComponent} from './app/movies-portal/movies-portal.component';
import {MoviesInfoComponent} from './app/movies-info/movies-info.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'moviePortal', component:MoviesPortalComponent },
  { path: 'movieInfo', component: MoviesInfoComponent },
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
