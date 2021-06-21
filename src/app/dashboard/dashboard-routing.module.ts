import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthenticationGuard} from '../uaa/Authentication-guard';
import {GraphListComponent} from './graph-list/graph-list.component';


const routes: Routes = [
  {path: '', canActivate: [AuthenticationGuard], component: HomeComponent },
  {path: 'graphs', canActivate: [AuthenticationGuard], component: GraphListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
