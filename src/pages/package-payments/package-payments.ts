import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
/**
 * Generated class for the PackagePaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-package-payments',
  templateUrl: 'package-payments.html',
})
export class PackagePaymentsPage {

  public items : Array<any>;

  private _HOST : string       =  "http://localhost:4201/";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _TOAST       : ToastController,
    private _HTTP       : HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackagePaymentsPage');
  }
  ionViewDidEnter() : void
   {
      this.retrieve();
   }

   retrieve() : void
   {
      this._HTTP
      .get(this._HOST + "packagepayments")
      .subscribe((data : any) =>
      {
         this.items = data;
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }

   displayNotification(message : string) : void
   {
      let toast = this._TOAST.create({
         message   : message,
         duration   : 3000
      });
      toast.present();
 
 }

}
