import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DriverDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-details',
  templateUrl: 'driver-details.html',
})
export class DriverDetailsPage {
  passenger:any;

  
  



  private newMethod() {
    console.log(this.passenger);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverDetailsPage');
    this.newMethod();
  }



}
