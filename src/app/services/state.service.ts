import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Payment } from '../models/Payment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StateService {

  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject 
  //   because it has the write rights
  // - Writing to state should be handled by specialized store methods 

  private readonly _payments = new BehaviorSubject<Payment[]>([]);

  // Expose the observable$ part of the _payments subject (read only stream)
  readonly payments$ = this._payments.asObservable();

  // the getter will return the last value emitted in _payments subject
  get payments(): Payment[] {
    return this._payments.getValue();
  }

  // assigning a value to this.payments will push it onto the observable 
  // and down to all of its subsribers (ex: this.payments = [])
  set payments(val: Payment[]) {
    this._payments.next(val);
  }

  addPayment(title: string, dayPrice: number) {
    // we assaign a new copy of payments by adding a new payment to it 
    // with automatically assigned ID ( its ok only for test case, I know )
    this.payments = [
      ...this.payments,
      {
        id: this.payments.length + 1, 
        title, 
        dayPrice,
        worth: 0
      }
    ];
  }

  changeWorth(id: number, value: number) {
    this.payments.find(payment => payment.id === id).worth += value;
  }

  removePayment(id: number) {
    this.payments = this.payments.filter(payment => payment.id !== id);
  }

  get paymentTotal(): number {
    if (this.payments.length) {
      return this.payments.reduce((summ, item) => summ + item.worth , 0);
    } 
    return 0;
  }
}