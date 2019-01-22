import { Component } from '@angular/core';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { IonicPage, NavController, NavParams, Alert, AlertController, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //public form: FormGroup;
  form : any;

  username : 'admin'
  password : 'admin'

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController,
    private authProvider: AuthProvider, 
    private alertCtrl: AlertController)

  
               {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


ForgotPassword(){
  this.navCtrl.push(ForgotPasswordPage);
}

login(){
  this.authProvider.login(this.username,this.password).then(success => {
    if(success){
      this.navCtrl.setRoot('TravelAgentProfilePage');
    }
  }).catch(err =>{
    let alert = this.alertCtrl.create({
      title:'Login Faild',
      message : 'Please Check your Username and Password',
      buttons: ['OK']
    });
    alert.present ();
  });
}

}