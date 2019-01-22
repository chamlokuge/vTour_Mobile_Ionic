import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelAgentProfilePage } from './travel-agent-profile';

@NgModule({
  declarations: [
    TravelAgentProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(TravelAgentProfilePage),
  ],
})
export class TravelAgentProfilePageModule {}
