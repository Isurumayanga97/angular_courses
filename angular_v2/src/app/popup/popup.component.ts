import {Component, OnInit} from '@angular/core';
import {MasterServiceService} from "../services/master-service.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private masterService: MasterServiceService) {
  }

  ngOnInit(): void {
  }


  saveData(name: string) {
    this.masterService.pushUserData(name);
  }


}
