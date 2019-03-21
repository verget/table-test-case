import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/models/Payment';
import { Month } from 'src/app/models/Month';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() points: Month[];
  @Input() payments: Payment[];

  constructor(
    public state: StateService
  ) { }

  ngOnInit() {}

  public selectPoint({paymentId, pointId, inList}) {
    const payment = this.payments.find(item => item.id === paymentId);
    const point = this.points.find(item => item.id === pointId);
    if (payment && point) {
      let monthCost: number = point.dayCount * payment.dayPrice;
      monthCost = (inList) ? monthCost : - monthCost;
      this.state.changeWorth(paymentId, monthCost);
    }
  }
}
