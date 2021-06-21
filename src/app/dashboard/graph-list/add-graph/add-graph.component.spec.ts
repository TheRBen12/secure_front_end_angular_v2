import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGraphComponent } from './add-graph.component';

describe('AddGraphComponent', () => {
  let component: AddGraphComponent;
  let fixture: ComponentFixture<AddGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
