import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isLogged() {
    const userName = localStorage.getItem('username');
    if (userName == '' || userName == null) {
      return false;
    } else {
      return true;
    }
  }

  checkUserRole(menu: any) {
    const role = localStorage.getItem('userRole');
    if (role == 'Admin') {
      return true;
    } else {
      if (menu == 'contact2') {
        return true;
      } else {
        return false;
      }
    }

  }


}
