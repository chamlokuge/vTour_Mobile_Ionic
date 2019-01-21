import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditClientPage } from './edit-client';

@NgModule({
  declarations: [
    EditClientPage,
  ],
  imports: [
    IonicPageModule.forChild(EditClientPage),
  ],
})
export class EditClientPageModule {}
