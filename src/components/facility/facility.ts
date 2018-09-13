import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";
import {FacilityPage} from "../../pages/facility/facility";
import {Facility} from "./models/facility.model";
import {TransportsPage} from "../../pages/transports/transports";
/**
 * Generated class for the FacilityComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'facility',
  templateUrl: 'facility.html'
})
export class FacilityComponent {

  private _numOfUpdates : number;

  @Input()
  facility : Facility;

  @Input()
  public bgColor : string;

  @Input()
  public iconName : string;

  @Input()
  public displayName : string;

  @Input()
  public isTransport : boolean = true;

  constructor(public navCtrl: NavController) {

  }

  public onUpdate() : void {
    this._numOfUpdates++;
  }

  public openFacilityPage(): void{
    if (this.isTransport) {
      this.navCtrl.push(FacilityPage, {facility: this.facility});
    } else {
      this.navCtrl.push(TransportsPage)
    }
  }
}
