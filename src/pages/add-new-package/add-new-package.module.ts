import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewPackagePage } from './add-new-package';

@NgModule({
  declarations: [
    AddNewPackagePage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewPackagePage),
  ],
})
export class AddNewPackagePageModule {}
