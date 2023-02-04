import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() userTableData: any;

  constructor() {
    // console.log('-----------');
    // console.log(this.userTableData);
  }

  ngOnInit(): void {
  }

}
