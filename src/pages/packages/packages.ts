import { EditPackagePage } from './../edit-package/edit-package';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the PackagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-packages',
  templateUrl: 'packages.html',
})
export class PackagesPage {

  public items: Array<any>;
  sp:any;
  private _HOST: string = "http://localhost:4201/";

  constructor(public navCtrl: NavController,
    private _TOAST: ToastController,
    private _HTTP: HttpClient,
    public navParams: NavParams,
  ) {
  this.sp = this.navParams.get('record');
}
  ionViewDidEnter(): void {

    this.retrieve();
  }

  retrieve(): void {
    this._HTTP
      .get(this._HOST + "packages")
      .subscribe((data: any) => {
        this.items = data;
        console.log(this.items);
      },
        (error: any) => {
          console.dir(error);
        });
  }

  deleteRecord(item: any): void {
    let recordID: string = item._id,
      url: any = this._HOST + "packages/" + recordID;

    this._HTTP
      .delete(url)
      .subscribe((data: any) => {
        this.retrieve();
        this.displayNotification(data.records.name + ' was successfully deleted');
      },
        (error: any) => {
          console.dir(error);
        });
  }

  updateRecord(item: any): void {
    this.navCtrl.push(EditPackagePage, { record: item });
  }


  displayNotification(message: string): void {
    let toast = this._TOAST.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
