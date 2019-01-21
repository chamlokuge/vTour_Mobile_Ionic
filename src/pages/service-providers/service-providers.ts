import { AddNewServiceProviderPage } from './../add-new-service-provider/add-new-service-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { EditServiceProvidersPage } from '../edit-service-providers/edit-service-providers';
/**
 * Generated class for the ServiceProvidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-providers',
  templateUrl: 'service-providers.html',
})
export class ServiceProvidersPage {
  public items : Array<any>;

   private _HOST : string       =  "http://localhost:4201/";


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _TOAST       : ToastController,
    private _HTTP       : HttpClient) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ServiceProvidersPage');
  // }
  ionViewDidEnter() : void
   {
      this.retrieve();
   }

  addNewAgent(){
    this.navCtrl.push(AddNewServiceProviderPage);
 }

  retrieve() : void
   {
      this._HTTP
      .get(this._HOST + "serviceproviders")
      .subscribe((data : any) =>
      {
         this.items = data;
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }

  deleteRecord(item : any) : void
   {
      let recordID     : string    = item._id,
          url         : any        = this._HOST + "travelagents/" + recordID;

      this._HTTP
      .delete(url)
      .subscribe((data : any) =>
      {
         this.retrieve();
         this.displayNotification('successfully deleted');
      },
      (error : any) =>
      {
         console.dir(error);
      });
   }

  updateRecord(item : any) : void
   {
     this.navCtrl.push(EditServiceProvidersPage, { record : item });
   }

  displayNotification(message : string) : void
  {
     let toast = this._TOAST.create({
        message   : message,
        duration   : 3000
     });
     toast.present();

}

addServiceProvider(){
  this.navCtrl.push(AddNewServiceProviderPage);
}

editServiceProvider(item:any):void{
  this.navCtrl.push(EditServiceProvidersPage,{ record : item });
}
}
