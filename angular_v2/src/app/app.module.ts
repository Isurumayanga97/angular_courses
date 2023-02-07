import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StatusComponent} from './status/status.component';
import {ContactComponent} from './contact/contact.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from "@angular/forms";
import {FontChangeDirective} from './directives/font-change.directive';
import {PopupComponent} from './popup/popup.component';
import {TableComponent} from './table/table.component';
import {HttpClientModule} from "@angular/common/http";
import { JobTableComponent } from './job-table/job-table.component';
import { TestcustompipePipe } from './pipe/testcustompipe.pipe';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { ErrorComponent } from './error/error.component';
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {ClientRoutingModule} from "./client/client-routing.module";
import { Home2Component } from './home2/home2.component';
import { Contact2Component } from './contact2/contact2.component';
import { User2Component } from './user2/user2.component';
import { LoginComponent } from './login/login.component';
import { UserviewComponent } from './userview/userview.component';
import { UseraddComponent } from './useradd/useradd.component';

@NgModule({
    declarations: [
        AppComponent,
        StatusComponent,
        ContactComponent,
        HeaderComponent,
        FontChangeDirective,
        PopupComponent,
        TableComponent,
        JobTableComponent,
        TestcustompipePipe,
        ChildComponent,
        HomeComponent,
        AboutComponent,
        EmployeeComponent,
        ManageEmployeeComponent,
        EmployeeListComponent,
        EmployeeEditComponent,
        ErrorComponent,
        Home2Component,
        Contact2Component,
        User2Component,
        LoginComponent,
        UserviewComponent,
        UseraddComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        // AdminRoutingModule,
        // ClientRoutingModule
    ],
    providers: [],
    exports: [
        PopupComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
