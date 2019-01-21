import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }



LogInUser(){
  this.navCtrl.push(EditProfilePage);
}
}