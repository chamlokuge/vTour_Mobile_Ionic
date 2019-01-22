import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditServiceProvidersPage } from './edit-service-providers';

@NgModule({
  declarations: [
    EditServiceProvidersPage,
  ],
  imports: [
    IonicPageModule.forChild(EditServiceProvidersPage),
  ],
})
export class EditServiceProvidersPageModule {}
