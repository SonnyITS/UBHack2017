import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { User } from "../../shared/user";

@IonicPage()

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  user = {} as User;


  constructor(public navCtrl: NavController) {
    

  }
  profilePage(){
    this.navCtrl.push("ProfilePage");
  }

  mapsPage(){
    this.navCtrl.push("GoogleMapsPage");
    
  }
}
