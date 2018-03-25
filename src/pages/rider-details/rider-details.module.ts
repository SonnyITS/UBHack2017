import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderDetailsPage } from './rider-details';

@NgModule({
  declarations: [
    RiderDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderDetailsPage),
  ],
})
export class RiderDetailsPageModule {}
