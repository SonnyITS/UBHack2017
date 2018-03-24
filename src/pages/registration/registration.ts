import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from "../../shared/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
