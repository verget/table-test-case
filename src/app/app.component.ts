import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Payment } from './models/Payment';
import { Month } from './models/Month';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public paymentForm: FormGroup;
  public months: Month[];
  constructor(
    public state: StateService
  ) {}

  ngOnInit() {
    this.paymentForm = new FormGroup({
      title: new FormControl('', Validators.compose([Validators.required])),
      dayPrice: new FormControl('', Validators.compose([Validators.required, Validators.min(1)])),
    });

    this.months = [
      {
        id: 1,
        title: 'Янв',
        dayCount: 31
      },
      {
        id: 2,
        title: 'Фев',
        dayCount: 28
      },
      {
        id: 3,
        title: 'Мар',
        dayCount: 31
      },
      {
        id: 4,
        title: 'Апр',
        dayCount: 30
      },
      {
        id: 5,
        title: 'Май',
        dayCount: 31
      },
      {
        id: 6,
        title: 'Июн',
        dayCount: 30
      },
      {
        id: 7,
        title: 'Июл',
        dayCount: 31
      },
      {
        id: 8,
        title: 'Авг',
        dayCount: 30
      },
      {
        id: 9,
        title: 'Сен',
        dayCount: 31
      },
      {
        id: 10,
        title: 'Окт',
        dayCount: 30
      },
      {
        id: 11,
        title: 'Ноя',
        dayCount: 30
      },
      {
        id: 12,
        title: 'Дек',
        dayCount: 31
      },
    ];

    const payments: Payment[] = [
      {
        title: 'Интернет',
        dayPrice: 10,
        worth: 0
      },
      {
        title: 'Домашний телефон',
        dayPrice: 10,
        worth: 0
      }
    ];

    payments.forEach(payment => {
      this.state.addPayment(payment.title, payment.dayPrice);
    })
  }

  submitPayment() {
    this.state.addPayment(this.paymentForm.value.title, this.paymentForm.value.dayPrice);
    this.paymentForm.reset();
  }
}
