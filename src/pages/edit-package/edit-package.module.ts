import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPackagePage } from './edit-package';

@NgModule({
  declarations: [
    EditPackagePage,
  ],
  imports: [
    IonicPageModule.forChild(EditPackagePage),
  ],
})
export class EditPackagePageModule {}
