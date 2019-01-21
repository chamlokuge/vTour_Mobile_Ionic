import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelAgentsPage} from '../travel-agents/travel-agents';

@IonicPage()
@Component({
  selector: 'page-add-new-client',
  templateUrl: 'add-new-client.html',
})
export class AddNewClientPage {

  public items: Array<any>;
  public form: FormGroup;

  public fname: string;
  public lname: string;
  public password: any;
  public email: any;
  public address: string;
  public city: string;
  public country: string;
  public postalcode: string;
  public noofvisitors: number;
  public agegroup: string;
  public telephone: [string];
  public rePassword: any;
  public foodprefer: string;
  public intactivities: string;
  public datefrom: string;
  public dateto: string;

  private _HOST: string = "http://localhost:4201/";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController) {
    this.form = this._FB.group({
      'fname': ['', Validators.required],
      'lname': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'rePassword': ['', Validators.required],
      'telephone': ['', Validators.required],
      'address': ['', Validators.required],
      'city': ['', Validators.required],
      'country': ['', Validators.required],
      'postalcode': ['', Validators.required],
      'noofvisitors': ['', Validators.required],
      'agegroup': ['', Validators.required],
      'foodprefer': ['', Validators.required],
      'intactivities': ['', Validators.required],
      'datefrom': ['', Validators.required],
      'dateto': ['', Validators.required],
    });
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
    this.fname = "";
    this.lname = "";
    this.address = ""
    this.city = ""
    this.country = ""
    this.postalcode = ""
    this.email = "";
    this.password = "";
    this.rePassword = "";
    this.telephone = [null];
    this.noofvisitors = null;
    this.agegroup ="";
    this.foodprefer = "";
    this.intactivities = "";
    this.datefrom = "";
    this.dateto = "";
  }

  onSubmit() {
    let fname: any = this.form.controls['fname'].value,
      lname: any = this.form.controls['lname'].value,
      address: any = this.form.controls['address'].value,
      city: any = this.form.controls['city'].value,
      country: any = this.form.controls['country'].value,
      postalcode: any = this.form.controls['postalcode'].value,
      email: any = this.form.controls['email'].value,
      password: any = this.form.controls['password'].value,
      telephone: any = this.form.controls['telephone'].value,
      agegroup: any = this.form.controls['agegroup'].value,
      noofvisitors: any = this.form.controls['noofvisitors'].value,
      foodprefer: any = this.form.controls['foodprefer'].value,
      intactivities: any = this.form.controls['intactivities'].value,
      datefrom: any = this.form.controls['datefrom'].value,
      dateto: any = this.form.controls['dateto'].value,
      headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { fname: fname, 
        lname: lname ,
        email: email, 
        password: password, 
        telephone: telephone, 
        address: address,
        city: city,
        country: country,
        postalcode: postalcode,
        noofvisitors: noofvisitors,
        agegroup: agegroup,
        foodprefer: foodprefer,
        intactivities: intactivities,
        datefrom: datefrom,
        dateto: dateto, },
      url: any = this._HOST + "clients";

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
    this.navCtrl.push(TravelAgentsPage)
  }
}