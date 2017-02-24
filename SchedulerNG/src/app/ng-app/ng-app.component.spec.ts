import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAppComponent } from './ng-app.component';

describe('NgAppComponent', () => {
  let component: NgAppComponent;
  let fixture: ComponentFixture<NgAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
