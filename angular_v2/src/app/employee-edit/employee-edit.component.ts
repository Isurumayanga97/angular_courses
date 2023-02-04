import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employeeId: any;

  constructor(private route: ActivatedRoute) {
    this.employeeId = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
