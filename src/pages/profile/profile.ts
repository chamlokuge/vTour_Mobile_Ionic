import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  form:any;
  data:any;
  public item : any;
  public fname: string;
  public lname: string;
  public username: string;
  public email: any;
  public telephone: [string];
 //private _HOST : string =  "http://localhost:4201/profile";
  private _TAHOST : string =  "http://localhost:4201/travelagents/";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _FB: FormBuilder,
              private _HTTP: HttpClient,
              private _TOAST: ToastController) {
  
  this.data = navParams.get('record');
  }

  ionViewDidLoad() :void{
    this.getDetails();
  }

  getDetails():void
  {
    if(this.data.user.usertype=="travelagent"){
      this._HTTP
      .get(this._TAHOST + this.data.user.id)
      .subscribe((data : any) =>
      {
         this.item = data;
         console.log(this.item);

      },
      (error : any) =>
      {
         console.dir(error);
      });
    }
  }
//usertype eka anuwa serach karana collection eka.
// id eka backend ywala full user details gannawa.
// e tika display karanawa
}
