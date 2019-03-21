import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { paymentStub } from '../stubs/payment.stub';

describe('StateService', () => {
  let service: StateService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addPayment', () => {
    it('should add payment to list', () => {
      expect(service.payments.length).toBeFalsy();
      service.addPayment(paymentStub.title, paymentStub.dayPrice);
      expect(service.payments.length).toBeTruthy();
    });
  });

  describe('removePayment', () => {
    it('should remove payment from the list', () => {
      service.addPayment(paymentStub.title, paymentStub.dayPrice);
      expect(service.payments.length).toBeTruthy();
      service.removePayment(1);
      expect(service.payments.length).toBeFalsy();
    });
  });

  describe('changeWorth', () => {
    it('should change payment worth to given value', () => {
      service.addPayment(paymentStub.title, paymentStub.dayPrice);
      expect(service.payments[0].worth).toEqual(0);
      service.changeWorth(1, 100);
      expect(service.payments[0].worth).toEqual(100);
    });
  });

  describe('paymentTotal', () => {
    it('should return payment total value', () => {
      expect(service.paymentTotal).toEqual(0);
    });
  });
});
