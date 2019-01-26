import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceProvidersPage } from '../service-providers/service-providers';
import { AlertController } from 'ionic-angular';

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
  private _LOGINHOST: string = "http://localhost:4201/login";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController,
    private alertCtrl: AlertController) {

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
  changePassword() {
    let alert = this.alertCtrl.create({
      title: 'Enter Email and Password',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Confirm',
          handler: data => {
            let
              headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
              options: any = { email: data.email, password: data.password },
              url: any = this._LOGINHOST;

            this._HTTP
              .post(url, options, headers)
              .subscribe((data: any) => {
                if (data.state) {
                  this.sendPassword();
                } else {
                  const alert = this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Invaild Email or Password',
                    buttons: ['OK']
                  });
                  alert.present();
                }
              });
          }
        }
      ]
    });
    alert.present();
  }

  sendPassword() {
    let alert = this.alertCtrl.create({
      title: 'Change Password',
      inputs: [
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        },
        {
          name: 'rePassword',
          placeholder: 'Re Enter Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Confirm',
          handler: data => {
            let
              headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
              options: any = { _id: this.tagent._id, password: data.password },
              url: any = this._HOST + "serviceproviders/changepw/" + this.tagent._id;
            console.log("options");
            console.log(options);
            this._HTTP
              .put(url, options, headers)
              .subscribe((data: any) => {
                if (data) {
                  const alert = this.alertCtrl.create({
                    title: 'SUCESS',
                    subTitle: 'Password Sucessfully Changed',
                    buttons: ['OK']
                  });
                  alert.present();
                } else {
                  const alert = this.alertCtrl.create({
                    title: 'ERROR',
                    subTitle: 'Password Change Failed',
                    buttons: ['OK']
                  });
                  alert.present();
                }
              });
          }
        }
      ]
    });
    alert.present();
  }

}

