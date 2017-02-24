import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSettingsDdComponent } from './ng-settings-dd.component';

describe('NgSettingsDdComponent', () => {
  let component: NgSettingsDdComponent;
  let fixture: ComponentFixture<NgSettingsDdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSettingsDdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSettingsDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
