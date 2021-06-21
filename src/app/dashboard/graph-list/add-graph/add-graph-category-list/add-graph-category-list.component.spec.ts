import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGraphCategoryListComponent } from './add-graph-category-list.component';

describe('AddGraphCategoryListComponent', () => {
  let component: AddGraphCategoryListComponent;
  let fixture: ComponentFixture<AddGraphCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGraphCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGraphCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
