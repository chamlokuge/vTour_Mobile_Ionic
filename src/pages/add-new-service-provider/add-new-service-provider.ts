import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
/**
 * Generated class for the AddNewServiceProviderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-service-provider',
  templateUrl: 'add-new-service-provider.html',
})
export class AddNewServiceProviderPage {

  public items : Array<any>;
  public form: FormGroup;

  public fname: string;
  public password : any;
  public email: any;
  public address: string;
  public type : string;
  public usertype : string;

  private _HOST : string 			=	"http://localhost:4201/";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController) {
      this.form = this._FB.group({
        'fname': ['', Validators.required],
        'password': ['', Validators.required],
        'email': ['', Validators.required],
        'address': ['', Validators.required],
        'type': ['', Validators.required],
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
    console.log('ionViewDidLoad AddNewServiceProviderPage');
  }

  clearForm(): void {
    //this._ID = "";
    this.fname = "";
    this.password = "";
    this.email = "";
    this.address=""
    this.type = "";
    this.usertype="";
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
          headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options: any = { fname: fname, password: password,email: email, address: address, type: type, usertype: usertype },
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
      }

      
    }


    