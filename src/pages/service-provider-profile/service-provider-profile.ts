import { AddNewPackagePage } from './../add-new-package/add-new-package';
import { EditPackagePage } from './../edit-package/edit-package';
import { EditServiceProvidersPage } from './../edit-service-providers/edit-service-providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the ServiceProviderProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-provider-profile',
  templateUrl: 'service-provider-profile.html',
})
export class ServiceProviderProfilePage {
  sp: any;
  public items: Array<any>;
  private _HOST: string = "http://localhost:4201/";

  constructor(private _HTTP: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.sp = navParams.get('record');

  }

  ionViewDidLoad() {
    this.retrieve();
  }
  updateRecord(item: any): void {
    console.log("edit");
    this.navCtrl.push(EditServiceProvidersPage, { record: item });
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
      },
        (error: any) => {
          console.dir(error);
        });
  }

  updatePackage(item: any): void {
    this.navCtrl.push(EditPackagePage, { record: item });
  }
  addNewPackage(){
    this.navCtrl.push(AddNewPackagePage);

  }

}
