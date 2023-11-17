import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProduitsComponent} from "./produits/produits.component";
import {DemobindingComponent} from "./demobinding/demobinding.component";
import {AddproduitComponent} from "./addproduit/addproduit.component";

const routes: Routes = [
  {path: "produits", component: ProduitsComponent},
  {path:"demobinding",component:DemobindingComponent},
  {path: "add-produit", component: AddproduitComponent},
  {path: "", redirectTo: "demobinding", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
