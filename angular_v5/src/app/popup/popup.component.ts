import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  employeeSave(data: any) {
    console.log(data);
  }

}
