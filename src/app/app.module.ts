import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemobindingComponent } from './demobinding/demobinding.component';

import { AppRoutingModule } from "./app-routing.module";

import {FormsModule} from "@angular/forms";//pour 2 way binding
import { ProduitsComponent } from './produits/produits.component';
import { AddproduitComponent } from './addproduit/addproduit.component';

@NgModule({
  declarations: [
    AppComponent,
    DemobindingComponent,
    ProduitsComponent,
    AddproduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
