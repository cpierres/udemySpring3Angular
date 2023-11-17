import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemobindingComponent } from './demobinding/demobinding.component';

import {FormsModule} from "@angular/forms";//pour 2 way binding
import { ProduitsComponent } from './produits/produits.component';

@NgModule({
  declarations: [
    AppComponent,
    DemobindingComponent,
    ProduitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
