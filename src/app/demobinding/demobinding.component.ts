import {Component} from '@angular/core';

@Component({
  selector: 'app-demobinding',
  templateUrl: './demobinding.component.html',
  styleUrls: ['./demobinding.component.css']
})
export class DemobindingComponent {
  titre: string = "demobinding works!";
  demoInterpolation: string = "Demo binding Component : interpolation";
  disableButton: boolean = true;

  changerTitre() {
    this.titre = "Nouveau titre";
  }
}
