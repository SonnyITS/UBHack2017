import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, ToastController } from 'ionic-angular';
import { User } from "../../shared/user";
import { AngularFireAuth } from 'angularfire2/auth';
import  firebase from 'firebase';

// var database = firebase.database();

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  user = {} as User;
  
  constructor(public navCtrl: NavController, public auth: AngularFireAuth, private alertCtrl: AlertController, 
    private toastCtrl: ToastController) {
    
  }
  profilePage(){
    this.navCtrl.push("ProfilePage");
  }

  checkChoice(user: User) {
  let alert = this.alertCtrl.create({
    title: 'User Mode',
    message: 'Are you sure you want to register as ' + user.mode + ' ?',
    buttons: [
      {
        text: 'Confirm',
        handler: () => {
          if(user.mode == "Driver"){
            console.log(user.mode);
            this.writeUserDataDriver(user.mode, user.name, user.email);
            this.goToDriverDetails();

              let toast = this.toastCtrl.create({
                message: 'Driver Account created successfully !',
                duration: 3000,
                position: 'top'
              });
            
              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });
            
              toast.present();
          }
          else{
            console.log(user.mode)
            this.writeUserDataRider(user.mode, user.name, user.email);
            this.goToMapsPage();   
            
            let toast = this.toastCtrl.create({
              message: 'Rider Account created successfully !',
              duration: 3000,
              position: 'top'
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
          
            toast.present();
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
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: e,
        buttons: ['Dismiss']
      });
       alert.present();
    }
    // console.log(e);
    }

  writeUserDataRider(mode, name, email) {
    firebase.database().ref('users/rider').update({
      username: name,
      email: email,
      mode: mode
     });
  }

  writeUserDataDriver(mode, name, email) {
    firebase.database().ref('users/driver').update({
      username: name,
      email: email,
      mode: mode
     });
  }

  goToDriverDetails(){
    this.navCtrl.push('DriverDetailsPage');
  }

  goToMapsPage(){
    this.navCtrl.push('GoogleMapsPage');
  }
}
