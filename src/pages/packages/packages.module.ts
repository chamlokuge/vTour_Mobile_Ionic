import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackagesPage } from './packages';

@NgModule({
  declarations: [
    PackagesPage,
  ],
  imports: [
    IonicPageModule.forChild(PackagesPage),
  ],
})
export class PackagesPageModule {}
