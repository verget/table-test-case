import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/models/Payment';
import { Month } from 'src/app/models/Month';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() months: Month[];
  // @Input() payments: Payment[];
  constructor() { }

  ngOnInit() {
  }

}
