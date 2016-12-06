import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';

import {
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapsLatLng,
 CameraPosition,
 GoogleMapsMarkerOptions,
 GoogleMapsMarker
} from 'ionic-native';

@Component({
	selector: 'instrument',
 	templateUrl: 'instrument.html'
})
export class InstrumentPage {
	// this tells the tabs component which Pages
	// should be each tab's root Page
	tab1Root: any = HomePage;
	tab3Root: any = ContactPage;

	item: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.item = navParams.get('item');
	}

	// Load map only after view is initialize
	ngAfterViewInit() {
	 this.loadMap();
	}

	loadMap() {
	 // make sure to create following structure in your view.html file
	 // <ion-content>
	 //  <div #map id="map"></div>
	 // </ion-content>

	 // create a new map by passing HTMLElement
	 console.log("ABRAKADABRA");
	 let element: HTMLElement = document.getElementById('map');

	 let map = new GoogleMap(element);

	 // listen to MAP_READY event
	 map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

	 // create LatLng object
	 let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);

	 // create CameraPosition
	 let position: CameraPosition = {
	   target: ionic,
	   zoom: 18,
	   tilt: 30
	 };

	 // move the map's camera to position
	 map.moveCamera(position);

	 // create new marker
	 let markerOptions: GoogleMapsMarkerOptions = {
	   position: ionic,
	   title: 'Ionic'
	 };

	 map.addMarker(markerOptions)
	   .then((marker: GoogleMapsMarker) => {
	      marker.showInfoWindow();
	    });
	 }

}

