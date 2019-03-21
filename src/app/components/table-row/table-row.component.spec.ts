import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowComponent } from './table-row.component';
import { paymentStub } from 'src/app/stubs/payment.stub';

describe('TableRowComponent', () => {
  let component: TableRowComponent;
  let fixture: ComponentFixture<TableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowComponent);
    component = fixture.componentInstance;
    component.payment = paymentStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectPoint', () => {
    it('should emit select event', () => {
      spyOn(component.select, 'emit');
      component.selectPoint(1, {target: {checked: true}});
      expect(component.select.emit).toHaveBeenCalled();
    });
  });

  describe('removePayment', () => {
    it('should emit remove event', () => {
      spyOn(component.remove, 'emit');
      component.removePayment();
      expect(component.remove.emit).toHaveBeenCalled();
    });
  });
});
