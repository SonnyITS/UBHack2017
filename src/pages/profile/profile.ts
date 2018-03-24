import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../shared/user";
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  name: String;
  email: String;
  phone: number;

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AngularFireAuth) {
  }

  async login(user: User){
    try{
      const result = await this.auth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result){
        this.navCtrl.setRoot('ProfilePage');
      }
    }
    catch(e){
      console.log(e);
    }
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
