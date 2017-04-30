import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { EmployeeListComponent,
         EmployeeViewComponent,
         SearchComponent } from 'app/components';

import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        EmployeeViewComponent,
        SearchComponent,
      ],
      imports: [
        RouterTestingModule,
        CoreModule.forRoot(),
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render visma logo', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').alt).toContain('Visma');
  }));
});
