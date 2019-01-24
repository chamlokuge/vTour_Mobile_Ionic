import { Component } from '@angular/core';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { ResetPasswordPage } from '../reset-password/reset-password';
import { IonicPage, NavController, NavParams, Alert, AlertController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';
import { TravelAgentsPage} from '../travel-agents/travel-agents';
import {TravelAgentProfilePage} from '../travel-agent-profile/travel-agent-profile';
import { ServiceProviderProfilePage} from '../service-provider-profile/service-provider-profile'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  authtoken: any;
  item:any;
  private _HOST: string = "http://localhost:4201/";
  public password: any;
  public email: any;
  public form: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController,
    private authProvider: AuthProvider, 
    private alertCtrl: AlertController)

  {
    this.form = this._FB.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]});
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


ForgotPassword(){
  this.navCtrl.push(ResetPasswordPage);
}

login(){
  let email: any = this.form.controls['email'].value,
    password: any = this.form.controls['password'].value,
    headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
    options: any = { email: email, password: password},
    url: any = this._HOST + "login";

  this._HTTP
    .post(url, options, headers)
    .subscribe((data: any) => {
      if(data.state==false){
        const alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Invalid Email or Password',
          buttons: ['OK']
        });
        alert.present();
      }else{
        if(data.user.usertype=="travelagent"){
          this._HTTP
            .get(this._HOST + "travelagents/" + data.user.id)
            .subscribe((res: any) => {
              this.navCtrl.setRoot(TravelAgentProfilePage, { record: res });
            },
            (error: any) => {
              console.dir(error);
            });
        }else{
          if (data.user.usertype == "serviceprovider") {
            this._HTTP
              .get(this._HOST + "serviceproviders/" + data.user.id)
              .subscribe((res: any) => {
                this.navCtrl.setRoot(ServiceProviderProfilePage, { record: res });
            },
              (error: any) => {
              console.dir(error);
            });
          }else{}
        } 
      }
    },
      (error: any) => {
        console.dir(error);
      });
  }
}