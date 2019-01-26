import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackagePaymentsPage } from './package-payments';

@NgModule({
  declarations: [
    PackagePaymentsPage,
  ],
  imports: [
    IonicPageModule.forChild(PackagePaymentsPage),
  ],
})
export class PackagePaymentsPageModule {}
