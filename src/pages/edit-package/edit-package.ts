import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackagesPage } from '../packages/packages';
/**
 * Generated class for the EditPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-package',
  templateUrl: 'edit-package.html',
})
export class EditPackagePage {

  public items: Array<any>;
  public form: FormGroup;

  public name: string;
  public availability: string;
  public type: string;
  public description: string;
  public price: any;
  public spid: string;
  public spname: string;

  package: any;
  private _HOST: string = "http://localhost:4201/";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController) {

    this.package = navParams.get('record');

    this.form = this._FB.group({
      'name': ['', Validators.required],
      'type': ['', Validators.required],
      'availability': ['', Validators.required],
      'description': ['', Validators.required],
      'price': ['', Validators.required],
      'spid': ['', Validators.required],
      'spname': ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTravelAgentPage');
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
      .put(url + '/' + this.package._id, options, headers)
      .subscribe((data: any) => {
        this.clearForm();
        this.displayNotification(name + 'Successfully updated');
      },
        (error: any) => {
          console.dir(error);
        });
    this.navCtrl.push(PackagesPage);
  }

  displayNotification(message: string): void {
    let toast = this._TOAST.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  clearForm(): void {
    this.name = "";
    this.type = "";
    this.availability = ""
    this.description = "";
    this.price = "";
    this.spid = "";
    this.spname = "";
  }

}

