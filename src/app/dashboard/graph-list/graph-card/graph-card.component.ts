import {Component, Input, OnInit} from '@angular/core';
import {Graph} from '../../../models/graph';

@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.scss']
})
export class GraphCardComponent implements OnInit {
  @Input() graph: Graph;
  constructor() { }

  ngOnInit(): void {
  }

}
