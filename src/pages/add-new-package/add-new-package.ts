import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the AddNewPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-package',
  templateUrl: 'add-new-package.html',
})
export class AddNewPackagePage {

  public items: Array<any>;
  public form: FormGroup;

  public name: string;
  public availability: string;
  public type: string;
  public description: string;
  public price: any;
  public spid: string;
  public spname: string;

  sp:any;
  private _HOST: string = "http://localhost:4201/";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController) {
    this.form = this._FB.group({
      'name': ['', Validators.required],
      'type': ['', Validators.required],
      'availability': ['', Validators.required],
      'description': ['', Validators.required],
      'price': ['', Validators.required],
      'spid': ['', Validators.required],
      'spname': ['', Validators.required],
    });

    this.sp = navParams.get('record');
  }

  displayNotification(message: string): void {
    let toast = this._TOAST.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewTravelAgentFormPage');
  }


  clearForm(): void {
    //this._ID = "";
    this.name = "";
    this.type = "";
    this.availability = ""
    this.description = "";
    this.price = "";
    this.spid = "";
    this.spname = "";
  }

  onSubmit() {
    let name: any = this.form.controls['name'].value,
      availability: any = this.form.controls['availability'].value,
      type: any = this.form.controls['type'].value,
      description: any = this.form.controls['description'].value,
      price: any = this.form.controls['price'].value,
      spid: any = this.form.controls['spid'].value,
      spname: any = this.form.controls['spname'].value,
      headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { name: name, availability: availability, description: description, price: price, spname: spname, spid: spid, type: type },
      url: any = this._HOST + "packages";

    this._HTTP
      .post(url, options, headers)
      .subscribe((data: any) => {
        console.log(url + " data " + JSON.stringify(data));
        this.clearForm();
        this.displayNotification('Account Created Sucessfully');
      },
        (error: any) => {
          console.dir(error);
        });
  }
}
