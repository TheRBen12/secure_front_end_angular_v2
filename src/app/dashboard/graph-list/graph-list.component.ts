import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Graph} from '../../models/graph';

@Component({
  selector: 'app-graph-list',
  templateUrl: './graph-list.component.html',
  styleUrls: ['./graph-list.component.scss']
})
export class GraphListComponent implements OnInit {
  public graphs: Array<Graph> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
