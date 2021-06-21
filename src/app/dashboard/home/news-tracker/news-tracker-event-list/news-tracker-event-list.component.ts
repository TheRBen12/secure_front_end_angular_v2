import {Component, OnDestroy, OnInit} from '@angular/core';
import {GraphService} from '../../../../utils/shared-services/graph-service';
import {Observable} from 'rxjs';
import {Graph} from '../../../../models/graph';
import {notifications} from '../../../../utils/notifications/notifications';

@Component({
  selector: 'app-new-tracker-event-list',
  templateUrl: './news-tracker-event-list.component.html',
  styleUrls: ['./news-tracker-event-list.component.scss']
})
export class NewsTrackerEventListComponent implements OnInit, OnDestroy{
  graphs: Observable<Graph[]>;
  public notifications = notifications;
  constructor(private graphService: GraphService) { }

  ngOnInit(): void {
    this.graphs = this.graphService.graphs;
  }

  ngOnDestroy(): void {
  }

}
