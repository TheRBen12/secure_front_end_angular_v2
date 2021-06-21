import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTrackerComponent } from './news-tracker.component';

describe('NewsTrackerComponent', () => {
  let component: NewsTrackerComponent;
  let fixture: ComponentFixture<NewsTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
