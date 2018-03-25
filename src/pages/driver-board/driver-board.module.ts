import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverBoardPage } from './driver-board';

@NgModule({
  declarations: [
    DriverBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverBoardPage),
  ],
})
export class DriverBoardPageModule {}
