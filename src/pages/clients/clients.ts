import { AddNewClientPage } from './../add-new-client/add-new-client';
import { EditClientPage } from './../edit-client/edit-client';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {

  public items: Array<any>;

  private _HOST: string = "http://localhost:4201/";

  constructor(public navCtrl: NavController,
    private _TOAST: ToastController,
    private _HTTP: HttpClient) { }
    
  ionViewDidEnter(): void {
    this.retrieve();
  }

  addNewClient() {
    this.navCtrl.push(AddNewClientPage);
  }

  retrieve(): void {
    this._HTTP
      .get(this._HOST + "clients")
      .subscribe((data: any) => {
        this.items = data;
      },
        (error: any) => {
          console.dir(error);
        });
  }

  deleteRecord(item: any): void {
    let recordID: string = item._id,
      url: any = this._HOST + "clients/" + recordID;

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

  updateRecord(item: any): void {
    this.navCtrl.push(EditClientPage, { record: item });
  }


  displayNotification(message: string): void {
    let toast = this._TOAST.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}

