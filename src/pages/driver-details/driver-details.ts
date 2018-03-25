import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-driver-details',
  templateUrl: 'driver-details.html',
})
export class DriverDetailsPage {
  passenger:any;

  constructor(public navCtrl : NavController) {
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverDetailsPage');
  
  }

  goToDash(){
    this.navCtrl.push('DriverBoardPage');
  }
}
