import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMainSectionComponent } from './ng-main-section.component';

describe('NgMainSectionComponent', () => {
  let component: NgMainSectionComponent;
  let fixture: ComponentFixture<NgMainSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgMainSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
