import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-new-agent',
  templateUrl: 'add-new-agent.html',
})
export class AddNewAgentPage {
  public items : Array<any>;
  public form: FormGroup;

  public fname: string;
  public lname: string;
  public username: string;
  public password: any;
  public email: any;
  public address: string;
  public isadmin: any;
  public telephone: [string];
  public rePassword :any;

  private _HOST : string 			=	"http://localhost:4201/";


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _FB: FormBuilder,
              private _HTTP: HttpClient,
              private _TOAST: ToastController)
              
  {
    this.form = this._FB.group({
      'fname': ['', Validators.required],
      'lname': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'rePassword': ['', Validators.required],
      'isadmin': ['', Validators.required],
      //'profilepic': ['', Validators.required],
      'telephone': ['', Validators.required],
      'address': ['', Validators.required],
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
    console.log('ionViewDidLoad AddNewTravelAgentFormPage');
  }



    /*if (this.navParams.get("record")) {
      this._HTTP
        .put(url + '/' + this._ID, options, headers)
        .subscribe((data: any) => {
          // If the request was successful clear the form of data
          // and notify the user
          this.clearForm();
          this.displayNotification(fname + 'Put was successfully updated');
        },
          (error: any) => {
            console.dir(error);
          });
    }*/

  clearForm(): void {
    //this._ID = "";
    this.fname = "";
    this.lname = "";
    this.address=""
    this.username = "";
    this.email = "";
    this.password = "";
    this.rePassword="";
    this.isadmin = false;
    //this.profilepic = "";
    this.telephone = [null];
  }

  onSubmit(){
    let fname: any = this.form.controls['fname'].value,
      lname: any = this.form.controls['lname'].value,
      usrename: any = this.form.controls['username'].value,
      address: any = this.form.controls['address'].value,
      email: any = this.form.controls['email'].value,
      password: any = this.form.controls['password'].value,
      //rePassword: any = this.form.controls['rePassword'].value,
      isadmin: any = this.form.controls['isadmin'].value,
      // profilepic: any = this.form.controls['profilepic'].value,
      telephone: any = this.form.controls['telephone'].value,
      headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { fname: fname, lname: lname, username: usrename, email: email, password: password, isadmin: isadmin, telephone: telephone, address: address },
      url: any = this._HOST + "travelagents";

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

/*  public items : Array<any>;
  public form: FormGroup;

  //private _ID: String;
  public fname: string;
  public lname: string;
  public username: string;
  public password: any;
  public email: any;
  public address: string;
  public isadmin: any;
  //public profilepic: string;
  public telephone: [string];
  public rePassword :any;

   private _HOST : string 			=	"http://localhost:4201/";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController) {
      this.form = this._FB.group({
        'fname': ['', Validators.required],
        'lname': ['', Validators.required],
        'username': ['', Validators.required],
        'email': ['', Validators.required],
        'password': ['', Validators.required],
        'rePassword': ['', Validators.required],
        'isadmin': ['', Validators.required],
        //'profilepic': ['', Validators.required],
        'telephone': ['', Validators.required],
        'address': ['', Validators.required],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewAgentPage');
  }

  displayNotification(message : string) : void
  {
     let toast = this._TOAST.create({
        message 	: message,
        duration 	: 3000
     });
     toast.present();
  }

  clearForm(): void {
    //this._ID = "";
    this.fname = "";
    this.lname = "";
    this.address=""
    this.username = "";
    this.email = "";
    this.password = "";
    this.rePassword="";
    this.isadmin = false;
    //this.profilepic = "";
    this.telephone = [null];
  }

  onSubmit(){
    let fname: any = this.form.controls['fname'].value,
      lname: any = this.form.controls['lname'].value,
      usrename: any = this.form.controls['username'].value,
      address: any = this.form.controls['address'].value,
      email: any = this.form.controls['email'].value,
      password: any = this.form.controls['password'].value,
      //rePassword: any = this.form.controls['rePassword'].value,
      isadmin: any = this.form.controls['isadmin'].value,
      // profilepic: any = this.form.controls['profilepic'].value,
      telephone: any = this.form.controls['telephone'].value,
      headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { fname: fname, lname: lname, username: usrename, email: email, password: password, isadmin: isadmin, telephone: telephone, address: address },
      url: any = this._HOST + "travelagents";

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
*/