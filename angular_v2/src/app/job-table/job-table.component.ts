import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-job-table',
  templateUrl: './job-table.component.html',
  styleUrls: ['./job-table.component.css']
})
export class JobTableComponent implements OnInit {

  @Input() jobTableData: any;

  constructor() {
  }

  ngOnInit(): void {
  }


}
