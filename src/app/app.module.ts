import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
import { HomePageModule } from '../pages/home/home.module';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { FIREBASE_CREDENTIALS } from "./firebase-credentials";

import * as firebase from 'firebase';

import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';
import { GoogleMapsPageModule } from '../pages/google-maps/google-maps.module';

import { AutoCompletePageModule } from '../pages/auto-complete/auto-complete.module';


@NgModule({
  declarations: [
    MyApp,
    // AboutPage,
    // ContactPage,
    TabsPage,
    ///GoogleMapsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    HomePageModule,
    GoogleMapsPageModule,
    AutoCompletePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    // ContactPage,
    // HomePage,
    TabsPage,
    GoogleMapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    // FirebaseApp,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
