import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrackerEventListComponent } from './news-tracker-event-list.component';

describe('NewTrackerEventListComponent', () => {
  let component: NewTrackerEventListComponent;
  let fixture: ComponentFixture<NewTrackerEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrackerEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrackerEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
