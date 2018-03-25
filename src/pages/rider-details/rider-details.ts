import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController} from 'ionic-angular';
import { User } from "../../shared/user";
import { AutocompletePage } from '../auto-complete/auto-complete';
// import  firebase from 'firebase';
import * as firebase from 'firebase'

// var database = firebase.database();


@IonicPage()
@Component({
  selector: 'page-rider-details',
  templateUrl: 'rider-details.html',
})
export class RiderDetailsPage {

  rider = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ModalCtrl:ModalController,
    public toastCtrl:ToastController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderDetailsPage');
  }

  requestRide(){
    // this.writeUserDataRider(this.rider.destinationLoc, this.rider.pickupLoc, this.rider.passCount);
    let toast = this.toastCtrl.create({
      message: 'Request sent to a driver successfully !',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
    // informs drivers around a 5 mile radius that a ride has been requested
    // send the rider's details to the driver
    // the driver will then chose to accept it or not

    this.navCtrl.push('GoogleMapsPage');
    
    console.log('hi');
    
  }

  showAddressModalPick() {
    let modal = this.ModalCtrl.create(AutocompletePage);
    modal.onDidDismiss(data => {
      this.rider.pickupLoc = data;
    });
    modal.present();
    console.log(this.rider.pickupLoc);
  }

  showAddressModalDest() {
    let modal = this.ModalCtrl.create(AutocompletePage);
    modal.onDidDismiss(data => {
      this.rider.destinationLoc = data;
    });
    modal.present();
    console.log(this.rider.destinationLoc);
  }
}

  // writeUserDataRider(dest, pick, passengers) {
  //   firebase.database().ref('users/' + this.rider.mode + '' + this.rider.name).update({
  //     destination: dest,
  //     pickup: pick,
  //     passengers : passengers
  //    });
  //   }
  // }
  // writeUserData(destination, pickup, passengers) {
  //   var postData = {
  //     destination: destination,
  //     pickup: pickup,
  //     passengers: passengers
  //   };
  
  //   // Get a key for a new Post.
  //   var newPostKey = firebase.database().ref().child('riderRider').push().key;
  
  //   var updates = {};
  //   updates['/users/rider' + newPostKey ] = postData;
  
  //   return firebase.database().ref().update(updates);
  // }
