import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvidersPage } from '../service-providers/service-providers';
/**
 * Generated class for the EditServiceProvidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-service-providers',
  templateUrl: 'edit-service-providers.html',
})
export class EditServiceProvidersPage {

  public items: Array<any>;
  public form: FormGroup;
  tagent:any;
  public fname: string;
  public email: any;
  public address: string;
  public description: string;
  public telephone: any;
  public username: string

  private _HOST: string = "http://localhost:4201/";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController) {

    this.tagent = navParams.get('record');

    this.form = this._FB.group({
      'fname': ['', Validators.required],
      'password': ['', Validators.required],
      'email': ['', Validators.required],
      'address': ['', Validators.required],
      'description': ['', Validators.required],
      'telephone': ['', Validators.required],
      'username': ['', Validators.required],

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTravelAgentPage');
  }

  onSubmit() {
    let fname: any = this.form.controls['fname'].value,
      password: any = this.form.controls['password'].value,
      email: any = this.form.controls['email'].value,
      address: any = this.form.controls['address'].value,
      telephone: any = this.form.controls['telephone'].value,
      description: any = this.form.controls['description'].value,
      username: any = this.form.controls['username'].value,
      headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { fname: fname, password: password, username: username, email: email, address: address, telephone: telephone, description: description },
      url: any = this._HOST + "serviceproviders";
    this._HTTP
      .put(url + '/' + this.tagent._id, options, headers)
      .subscribe((data: any) => {
        this.clearForm();
        this.displayNotification(fname + 'Successfully updated');
      },
        (error: any) => {
          console.dir(error);
        });
    this.navCtrl.push(ServiceProvidersPage);
  }

  displayNotification(message: string): void {
    let toast = this._TOAST.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  clearForm(): void {
    this.fname = "";
    this.email = "";
    this.address = ""
     this.description = "";
    this.telephone = "";
    this.username = "";
  }

}

