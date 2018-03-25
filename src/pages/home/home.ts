import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from "../../shared/user";
import { AngularFireAuth } from 'angularfire2/auth';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AngularFireAuth,
    public alertCtrl: AlertController){
  }

  async login(user: User){
    try{
      const result = await this.auth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result){
        if(user.mode == "Rider"){
          this.navCtrl.push("GoogleMapsPage");
        }
        else{
          this.navCtrl.push('DriverBoardPage');
        }
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

  goToRegister(){
    this.navCtrl.push('RegistrationPage');
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

