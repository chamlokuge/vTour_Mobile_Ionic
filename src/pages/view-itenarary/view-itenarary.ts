import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the ViewItenararyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-itenarary',
  templateUrl: 'view-itenarary.html',
})
export class ViewItenararyPage {

  public items: Array<any>;

  private _HOST: string = "http://localhost:4201/";

  constructor(public navCtrl: NavController,
    private _TOAST: ToastController,
    private _HTTP: HttpClient) { }
  ionViewDidEnter(): void {
    this.retrieve();
  }

  /*addNewAgent() {
    this.navCtrl.push(AddNewAgentPage);
  }*/

  retrieve(): void {
    this._HTTP
      .get(this._HOST + "itinerary")
      .subscribe((data: any) => {
        this.items = data;
      },
        (error: any) => {
          console.dir(error);
        });
  }

  deleteRecord(item: any): void {
    let recordID: string = item._id,
      url: any = this._HOST + "itinerary/" + recordID;

    this._HTTP
      .delete(url)
      .subscribe((data: any) => {
        this.retrieve();
        this.displayNotification('successfully deleted');
      },
        (error: any) => {
          console.dir(error);
        });
  }

  /*updateRecord(item: any): void {
    this.navCtrl.push(EditTravelAgentPage, { record: item });
  }*/


  displayNotification(message: string): void {
    let toast = this._TOAST.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
