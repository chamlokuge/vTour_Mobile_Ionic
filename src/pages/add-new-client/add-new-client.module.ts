import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewClientPage } from './add-new-client';

@NgModule({
  declarations: [
    AddNewClientPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewClientPage),
  ],
})
export class AddNewClientPageModule {}
