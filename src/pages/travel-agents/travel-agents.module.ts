import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TravelAgentsPage } from './travel-agents';

@NgModule({
  declarations: [
    TravelAgentsPage,
  ],
  imports: [
    IonicPageModule.forChild(TravelAgentsPage),
  ],
})
export class TravelAgentsPageModule {}
