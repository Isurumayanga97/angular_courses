import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as path from "path";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SettingComponent} from "./setting/setting.component";

const routes: Routes = [
  {
    path: 'client',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
