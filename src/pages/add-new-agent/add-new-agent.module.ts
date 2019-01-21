import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewAgentPage } from './add-new-agent';

@NgModule({
  declarations: [
    AddNewAgentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewAgentPage),
  ],
})
export class AddNewAgentPageModule {}
