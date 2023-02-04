import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  apiUrl = "http://localhost:8000/api/";

  constructor(private http: HttpClient) {
  }

  userData = of([{'name': "Isuru", 'age': "20"},
    {'name': "Umayanga", 'age': "30"},
    {'name': "Ranga", 'age': "40"}]);

  userObj = {'name': "", 'age': "0"};

  tableData = [{'name': "Isuru", 'mark': '100 '}];

  getUserData() {
    return this.userData;
  }

  getJobData() {
    return this.http.get(this.apiUrl + 'job/');
  }

  pushUserData(name: string) {
    this.userObj = {'name': name, 'age': "50"}
    this.userData.subscribe(item => {
      item.push(this.userObj);
    })
  }

  saveJobData(data: any) {
    return this.http.post(this.apiUrl + 'test-post', data);
  }

  saveTableData(data: any) {
    this.tableData.push(data);
  }

  getTableData() {
    return this.tableData;
  }


}
