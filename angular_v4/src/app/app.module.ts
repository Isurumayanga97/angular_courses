import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
