import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
// var service = new google.maps.places.PlacesService(this.map);



@IonicPage()
@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  lat : number;
  lon : number;
  locName: any;


  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    this.loadMap();
    
  }

  loadMap(){
    
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      ///let latLng = new google.maps.LatLng(-34.9290, 138.6010);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP

      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.addMarker();

      // service.getDetails = google.maps.places.PlaceResult;
      // this.locName = google.maps.places.PlaceResult.long_name;
      
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;

      console.log(this.lat);
      console.log(this.lon);

    });

  }

  addMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      // title: this.locName,
      // icon: photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})

    });
   
    let content = 'hi' ;       
   
    this.addInfoWindow(marker, content);
  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
   
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

 requestRide(){
    this.navCtrl.push("RiderDetailsPage");
  }

  // getPosition(){
  //   this.lat = position.coords.latitude;
  //   this.lon = position.coords.longitude;
  // }

  }