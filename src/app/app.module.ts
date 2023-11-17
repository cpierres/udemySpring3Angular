import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemobindingComponent } from './demobinding/demobinding.component';

import {FormsModule} from "@angular/forms";//pour 2 way binding

@NgModule({
  declarations: [
    AppComponent,
    DemobindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
