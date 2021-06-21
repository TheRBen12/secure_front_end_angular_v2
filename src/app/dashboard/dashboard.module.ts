import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { GraphListComponent } from './graph-list/graph-list.component';
import { GraphCardComponent } from './graph-list/graph-card/graph-card.component';
import {MatCardModule} from '@angular/material/card';
import { AddGraphComponent } from './graph-list/add-graph/add-graph.component';
import {MatIconModule} from '@angular/material/icon';
import { AddGraphCategoryListComponent } from './graph-list/add-graph/add-graph-category-list/add-graph-category-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NewsTrackerComponent } from './home/news-tracker/news-tracker.component';
import { NewsTrackerEventListComponent } from './home/news-tracker/news-tracker-event-list/news-tracker-event-list.component';



@NgModule({
  declarations: [HomeComponent, GraphListComponent, GraphCardComponent, AddGraphComponent, AddGraphCategoryListComponent,
    NewsTrackerComponent,
    NewsTrackerEventListComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatToolbarModule,
    MatSidenavModule,

  ]
})
export class DashboardModule {
  constructor() {
  }
}
