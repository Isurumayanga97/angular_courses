import {Component, ViewChild} from '@angular/core';
import {MasterServiceService} from "./services/master-service.service";
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-angular-v2';
  itemDisable = true;
  inputValue = 'Isuru';
  currentDate = new Date();

  getData(data: string) {
    alert('Hii ' + data);
  }

  userList: any;
  jobList: any;
  jobSaveData = {
    "type": "Test2"
  }
  amount = 250;
  typeData = '';

  nameData = '';
  markData = '';
  tableResponse: any;


  @ViewChild(ChildComponent) viewData: any;

  // @ViewChild(ChildComponent) viewData !: ChildComponent;

  constructor(private maserService: MasterServiceService) {
    // this.userList = this.maserService.getUserData();
    // this.maserService.getUserData().subscribe(result => {
    //   this.userList = result;
    // });
    // this.maserService.getJobData().subscribe(result => {
    //   this.jobList = result;
    // })

    localStorage.setItem("my_name", "Isuru Umayanga");

  }

  inputChange() {
    console.log(this.inputValue);
  }

  saveJobType() {
    this.maserService.saveJobData(this.jobSaveData).subscribe(result => {
      console.log(result);
    })
  }

  formSave(data: any) {
    // this.nameData = data.name;
    // this.markData = data.mark;
    // this.tableResponse = this.viewData.updateTable(data);
    this.maserService.saveTableData(data);
  }

  updateTitle(title: any) {
    console.log(title);
    this.title = title;
  }


}
