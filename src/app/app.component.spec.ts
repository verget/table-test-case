import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from './services/state.service';
import { stateServiceStub } from './stubs/state.service.stub';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TableComponent,
        TableRowComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: StateService,
          useValue: stateServiceStub
        },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a paymentForm and months properties`, () => {
    component.ngOnInit();
    expect(component.paymentForm).toBeDefined();
    expect(component.months).toBeDefined();
  });

  it('should render title in a h2 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Состояние платежей');
  });

  it('should call state service method on init', () => {
    const stateService = TestBed.get(StateService);
    spyOn(stateService, 'addPayment');
    component.ngOnInit();
    expect(stateService.addPayment).toHaveBeenCalledTimes(2);
  });

  describe('submitPayment', () => {
    it('should call state service method', () => {
      const stateService = TestBed.get(StateService);
      spyOn(stateService, 'addPayment');
      component.submitPayment();
      expect(stateService.addPayment).toHaveBeenCalled();
    });
  })
});
