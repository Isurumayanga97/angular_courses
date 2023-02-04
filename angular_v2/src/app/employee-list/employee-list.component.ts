import {Component, OnInit} from '@angular/core';
import {MasterServiceService} from "../services/master-service.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  jobData: any;

  constructor(private masterService: MasterServiceService) {
    masterService.getJobData().subscribe(result => {
      this.jobData = result;
    })
  }

  ngOnInit(): void {
  }

}
