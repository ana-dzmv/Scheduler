import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNewTaskFormComponent } from './ng-new-task-form.component';

describe('NgNewTaskFormComponent', () => {
  let component: NgNewTaskFormComponent;
  let fixture: ComponentFixture<NgNewTaskFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNewTaskFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNewTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
