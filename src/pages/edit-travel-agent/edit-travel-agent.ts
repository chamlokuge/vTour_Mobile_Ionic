import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { TravelAgentsPage} from '../travel-agents/travel-agents';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-edit-travel-agent',
  templateUrl: 'edit-travel-agent.html',
})
export class EditTravelAgentPage {

  form:any;
  tagent:any;
  public fname: string;
  public lname: string;
  public username: string;
  public email: any;
  public address: string;
  public isadmin: any;
  public telephone: [string];
  private _HOST : string       =  "http://localhost:4201/travelagents";
  private _LOGINHOST: string = "http://localhost:4201/login";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _FB: FormBuilder,
    private _HTTP: HttpClient,
    private _TOAST: ToastController,
    private alertCtrl: AlertController) {
    
      this.tagent = navParams.get('record');

    this.form = this._FB.group({
      'id': [this.tagent.fname, Validators.required],
      'fname': ['', Validators.required],
      'lname': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'isadmin': ['', Validators.required],
      'telephone': ['', Validators.required],
      'address': ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTravelAgentPage');
  }

  onSubmit(){
    let 
      id:any=this.form.controls["id"].value,
      fname: any = this.form.controls['fname'].value,
      lname: any = this.form.controls['lname'].value,
      usrename: any = this.form.controls['username'].value,
      address: any = this.form.controls['address'].value,
      email: any = this.form.controls['email'].value,
      isadmin: any = this.form.controls['isadmin'].value,
      telephone: any = this.form.controls['telephone'].value,
      headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { fname: fname, lname: lname, username: usrename, email: email, isadmin: isadmin, telephone: telephone, address: address },
      url: any = this._HOST;
    this._HTTP
      .put(url + '/' + this.tagent._id, options, headers)
      .subscribe((data: any) => {
        this.clearForm();
        this.displayNotification(fname + 'Successfully updated');
      },
        (error: any) => {
          console.dir(error);
        });
        this.navCtrl.push(TravelAgentsPage);
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
    this.lname = "";
    this.address = ""
    this.username = "";
    this.email = "";
    this.isadmin = false;
    this.telephone = [null];
  }
  changePassword(){
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
                if(data.state){
                  this.sendPassword();
                }else{
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

  sendPassword(){
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
              options: any = { _id: this.tagent._id, password: data.password},
              url: any = this._HOST + "/changepw/" + this.tagent._id;
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
