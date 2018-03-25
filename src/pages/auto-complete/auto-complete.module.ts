import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutocompletePage } from './auto-complete';

@NgModule({
  declarations: [
    AutocompletePage,
  ],
  imports: [
    IonicPageModule.forChild(AutocompletePage),
  ],
})
export class AutoCompletePageModule {}
