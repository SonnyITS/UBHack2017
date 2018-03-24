import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { User } from "../../shared/user";
import { AngularFireAuth } from 'angularfire2/auth';
// import { AlertController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  user = {} as User;
  
  constructor(public navCtrl: NavController, public auth: AngularFireAuth) {
    
  }
  profilePage(){
    this.navCtrl.push("ProfilePage");
  }

  mapsPage(){
    this.navCtrl.push("GoogleMapsPage");
  }

  async register(user: User){
    try{
      const result = await this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.setRoot('ProfilePage');
      }
    }
    catch(e){
      console.log(e);
    }
   }

}
