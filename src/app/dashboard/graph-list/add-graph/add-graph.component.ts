import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-graph',
  templateUrl: './add-graph.component.html',
  styleUrls: ['./add-graph.component.scss']
})
export class AddGraphComponent implements OnInit {
  public flipped: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
