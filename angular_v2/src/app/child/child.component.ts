import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MasterServiceService} from "../services/master-service.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() nameInput: any;
  @Input() markInput: any;
  @Output() updateTitleEvent = new EventEmitter<string>;

  tableData = [{'name': "Isuru", 'mark': '100 '}];
  tableData2 = [{'name': "", 'mark': ''}];
  myName: any;

  constructor(private masterService: MasterServiceService) {
    this.tableData2 = masterService.getTableData();
  }

  ngOnInit(): void {
    this.myName = localStorage.getItem('my_name') != null ? localStorage.getItem('my_name') : "";
  }

  updateTable(obj: any) {
    this.tableData.push(obj);
    return obj.name + "is adedd!";
  }


}
