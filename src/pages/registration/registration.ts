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

  checkChoice(user: User) {
  let alert = this.alertCtrl.create({
    title: 'User Mode',
    message: 'Are you sure you want to register as ' + user.mode+ ' ?',
    buttons: [
      {
        text: 'Confirm',
        handler: () => {
          if(user.mode == "Driver"){
            console.log(user.mode);
            this.goToDriverDetails();
          }
          else{
            console.log(user.mode)
            this.goToMapsPage();        
          }
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });
    alert.present();
  }

  async register(user: User){
    try{
      const result = await this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result){
        this.checkChoice(user);
      }
    }
    catch(e){
      console.log(e);
    }
  }

  goToDriverDetails(){
    this.navCtrl.push('DriverDetailsPage');
  }

  goToMapsPage(){
    this.navCtrl.push('GoogleMapsPage');
  }
}
