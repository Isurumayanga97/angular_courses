import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {EmployeeComponent} from "./employee/employee.component";
import {ManageEmployeeComponent} from "./manage-employee/manage-employee.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";
import {ErrorComponent} from "./error/error.component";
import {Contact2Component} from "./contact2/contact2.component";
import {User2Component} from "./user2/user2.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guard/auth.guard";
import {RoleGuard} from "./guard/role.guard";
import {UseraddComponent} from "./useradd/useradd.component";
import {UserviewComponent} from "./userview/userview.component";
import {ChildGuard} from "./guard/child.guard";

// const routes: Routes = [
//   {
//     component: HomeComponent,
//     path: ''
//   },
//   {
//     component: AboutComponent,
//     path: 'about'
//   },
//   {
//     component: EmployeeComponent,
//     path: 'employee',
//     children: [
//       {
//         component: ManageEmployeeComponent,
//         path: 'manage-employee'
//       },
//       {
//         component: EmployeeListComponent,
//         path: ''
//       },
//       {
//         component: EmployeeEditComponent,
//         path: 'Edit/:id'
//       },
//       // {
//       //   component: ErrorComponent,
//       //   path: '**'
//       // }
//     ]
//   },
//
// ];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact2',
    component: Contact2Component,
    // canActivate:[AuthGuard]
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'user2',
    component: User2Component,
    // canActivate:[AuthGuard]
    canActivate: [AuthGuard, RoleGuard],
    canActivateChild: [ChildGuard],
    children: [
      {
        path: 'add',
        component: UseraddComponent,
        canDeactivate:[ChildGuard]
      },
      {
        path: 'view',
        component: UserviewComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
