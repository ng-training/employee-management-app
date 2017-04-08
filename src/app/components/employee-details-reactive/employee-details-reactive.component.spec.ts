import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeDetailsReactiveComponent } from './employee-details-reactive.component';
import { CoreModule } from '../../core/core.module';

describe('EmployeeDetailsReactiveComponent', () => {
  let component: EmployeeDetailsReactiveComponent;
  let fixture: ComponentFixture<EmployeeDetailsReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsReactiveComponent ],
      imports: [RouterTestingModule, HttpModule, ReactiveFormsModule, CoreModule]
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
