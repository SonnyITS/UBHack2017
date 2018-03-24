import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { User } from "../../shared/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  user = {} as User;
  
  constructor(public navCtrl: NavController, public auth: AngularFireAuth, private alertCtrl: AlertController) {
    
  }
  profilePage(){
    this.navCtrl.push("ProfilePage");
  }

  presentChoice(user: User) {
  let alert = this.alertCtrl.create({
    title: 'User Mode',
    message: 'Are you proving rides (driver) or do you need a ride (rider)?',
    buttons: [
      {
        text: 'Driver',
        handler: () => {
          user.mode = "driver"
          console.log("user is a: " + user.mode);
        }
      },
      {
        text: 'Rider',
        handler: () => {
          user.mode = "driver"
          console.log("user is a: " + user.mode);
        }
      }
    ]
  });
  alert.present();
}

  async register(user: User){
    try{
      const result = await this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.presentChoice(user);
      if(result){
        this.navCtrl.setRoot('ProfilePage');
      }
    }
    catch(e){
      console.log(e);
    }
  }
}
