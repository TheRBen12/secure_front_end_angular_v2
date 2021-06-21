import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './uaa/login/login.component';
import {RegisterComponent} from './uaa/register/register.component';

const routes: Routes = [

  {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
