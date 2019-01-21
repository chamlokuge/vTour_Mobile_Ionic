import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewServiceProviderPage } from './add-new-service-provider';

@NgModule({
  declarations: [
    AddNewServiceProviderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewServiceProviderPage),
  ],
})
export class AddNewServiceProviderPageModule {}
