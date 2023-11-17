import { Component } from '@angular/core';

@Component({
  selector: 'app-demobinding',
  templateUrl: './demobinding.component.html',
  styleUrls: ['./demobinding.component.css']
})
export class DemobindingComponent {
  demoInterpolation: string = "Demo binding Component : interpolation";
  disableButton : boolean = true;
}
