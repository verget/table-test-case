import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { TableRowComponent } from '../table-row/table-row.component';
import { StateService } from 'src/app/services/state.service';
import { stateServiceStub } from 'src/app/stubs/state.service.stub';
import { paymentStub } from 'src/app/stubs/payment.stub';
import { pointStub } from 'src/app/stubs/point.stub';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TableComponent,
        TableRowComponent
       ],
       providers: [
        {
          provide: StateService,
          useValue: stateServiceStub
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectPoint', () => {
    it('call state service changeWorth method', () => {
      const stateService = TestBed.get(StateService);
      spyOn(stateService, 'changeWorth');
      component.payments = [paymentStub];
      component.points = [pointStub];
      component.selectPoint({paymentId: 1, pointId: 1, inList: true});
      expect(stateService.changeWorth).toHaveBeenCalled();
    });
  });
});
