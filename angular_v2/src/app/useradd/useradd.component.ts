import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {

  saveName = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  saveData(name: any) {
    if (name == '') {
      this.saveName = true;
    } else {
      this.saveName = false;
    }
  }

  saveChanges() {
    console.log(this.saveName);
    if (this.saveName) {
      // console.log('----true1-----');
      return true;
    } else {
      if (confirm('Your text is not save')) {
        return true;
      } else {
        return false;
      }
    }
  }


}
