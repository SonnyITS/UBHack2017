import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-driver-board',
  templateUrl: 'driver-board.html',
})
export class DriverBoardPage {

  dest : string = this.navParams.get('this.rider.destinationLoc');

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverBoardPage');
    console.log(this.dest);
  }

  acceptRide(){
    let toast = this.toastCtrl.create({
      message: 'Awesome! Notifying the rider !',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();

    this.navCtrl.push('GoogleMapsPage');
  }  

}
