import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsReactiveComponent } from './employee-details-reactive.component';

describe('EmployeeDetailsReactiveComponent', () => {
  let component: EmployeeDetailsReactiveComponent;
  let fixture: ComponentFixture<EmployeeDetailsReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
