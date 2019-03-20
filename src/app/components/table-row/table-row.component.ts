import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent implements OnInit {

  @Output() delete = new EventEmitter();
  @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectPoint(value) {
    console.log(value);
  }

}
