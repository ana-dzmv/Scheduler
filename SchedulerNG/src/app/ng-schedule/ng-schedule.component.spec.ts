import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgScheduleComponent } from './ng-schedule.component';

describe('NgScheduleComponent', () => {
  let component: NgScheduleComponent;
  let fixture: ComponentFixture<NgScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
