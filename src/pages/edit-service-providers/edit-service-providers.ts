import { ServiceProvidersPage } from './../service-providers/service-providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
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
  // public items : Array<any>;
  // public form: FormGroup;
  form:any;
  tagent:any;

  public fname: string;
  public username: string;
  public telephone: number;
  public password : any;
  public email: any;
  public address: string;
  public type : string;
  public usertype : string;
  public discription: any;

  private _HOST : string 			=	"http://localhost:4201/";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController) {

      this.tagent = navParams.get('record');

      this.form = this._FB.group({
        'fname': ['', Validators.required],
        'password': ['', Validators.required],
        'email': ['', Validators.required],
        'address': ['', Validators.required],
        'type': ['', Validators.required],
        'username': ['', Validators.required],
        'telephone': ['', Validators.required],
        'discription': ['', Validators.required],
        'usertype': ['', Validators.required],
        //'profilepic': ['', Validators.required],
        
      });
    }
        

  displayNotification(message : string) : void
  {
     let toast = this._TOAST.create({
        message 	: message,
        duration 	: 3000
     });
     toast.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditNewServiceProviderPage');
  }

  clearForm(): void {
    //this._ID = "";
    this.fname = "";
    this.password = "";
    this.email = "";
    this.address="";
    this.type = "";
    this.usertype="";
    this.username="";
    this.telephone= null;
    this.discription="";
        //this.profilepic = "";
      }
      onSubmit(){
        let fname: any = this.form.controls['fname'].value,
        password: any = this.form.controls['password'].value,
        email: any = this.form.controls['email'].value,
          address: any = this.form.controls['address'].value,
          type: any = this.form.controls['type'].value,
          // profilepic: any = this.form.controls['profilepic'].value,
          usertype: any = this.form.controls['usertype'].value,
          username: any = this.form.controls['username'].value,
          telephone: any = this.form.controls['telephone'].value,
          discription: any = this.form.controls['discription'].value,
          headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options: any = { fname: fname, password: password,email: email, address: address, type: type, usertype: usertype,username:username,telephone:telephone,discription:discription },
          url: any = this._HOST + "serviceproviders";
    
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
            this.navCtrl.push(ServiceProvidersPage);
      }

      
    }


  
