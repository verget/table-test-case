import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/Payment';
import { Month } from 'src/app/models/Month';

@Component({
  selector: '[payment-tr]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent implements OnInit {

  @Input() payment: Payment;
  @Input() points: Month[];
  @Output() remove = new EventEmitter();
  @Output() select = new EventEmitter();

  public averagePrice: number;

  constructor() { }

  ngOnInit(): void {
    this.averagePrice = this.payment.dayPrice * 30;
  }

  selectPoint(pointId, event) {
    this.select.emit({
      paymentId: this.payment.id,
      pointId,
      inList: event.target.checked
    });
  }

  removePayment() {
    this.remove.emit();
  }

}
