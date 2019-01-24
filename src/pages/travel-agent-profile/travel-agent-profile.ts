import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditTravelAgentPage} from '../edit-travel-agent/edit-travel-agent';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the TravelAgentProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel-agent-profile',
  templateUrl: 'travel-agent-profile.html',
})
export class TravelAgentProfilePage {
  tagent:any;
  public items: Array<any>;
  private _HOST: string = "http://localhost:4201/";

  constructor(private _HTTP: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.tagent = navParams.get('record');

  }

  ionViewDidLoad() {
    console.log(this.tagent);
    this.retrieve();
  }
  retrieve(): void {
    this._HTTP
      .get(this._HOST + "itinerary")
      .subscribe((data: any) => {
        this.items = data;
        console.log(data);
      },
        (error: any) => {
          console.dir(error);
        });
  }
  updateRecord(item: any): void {
    this.navCtrl.push(EditTravelAgentPage, { record: item });
  }

}
