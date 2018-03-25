import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../shared/user";

@IonicPage()
@Component({
  selector: 'page-rider-details',
  templateUrl: 'rider-details.html',
})
export class RiderDetailsPage {

  rider = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderDetailsPage');
  }

  requestRide(){
    // informs drivers around a 5 mile radius that a ride has been requested
    // send the rider's details to the driver
    // the driver will then chose to accept it or not
    console.log('hi');
    
  }

}
