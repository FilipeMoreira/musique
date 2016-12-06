import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { InstrumentPage } from '../instrument/instrument';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	instruments: Array<{title: string, picture: string, component: any}>;

	constructor(public navCtrl: NavController) {
		this.instruments = [
	    	{ title: 'Guitarra', 
	    	picture: 'http://www.freetenzin.org/wp-content/uploads/2016/03/playing-guitar.jpg', 
	    	component: InstrumentPage },
	    	{ title: 'Piano',
	    	picture: 'https://saladomusico.com.br/blog/wp-content/uploads/2016/08/teclado-e-piano.jpg',
	    	component: InstrumentPage},
	    	{ title: 'Bateria',
	    	picture: 'http://cdn.mos.musicradar.com/images/Tutorial%20images/Drums/drum-kit-hacks/drum-kit-hack-main-1200-80.jpg',
	    	component: InstrumentPage},
	    	{ title: 'Violão',
	    	picture: 'https://i.ytimg.com/vi/0Yd2lZSaI3M/maxresdefault.jpg',
	    	component: InstrumentPage},
	    	{ title: 'Violino',
	    	picture: 'http://tch15-assets.medici.tv/media/uploads/live/violon.jpg',
	    	component: InstrumentPage},
	    	{ title: 'Saxofone',
	    	picture: 'https://www.kesslerandsons.com/wp-content/uploads/2015/06/sax1.jpg',
	    	component: InstrumentPage},
	    	{ title: 'Teoria Musical',
	    	picture: 'https://cowswithguns.com/public-files/sheet-music.jpg',
	    	component: InstrumentPage}
	    ];
	}

	itemTapped(event, item) {
    	this.navCtrl.push(InstrumentPage, {
    		item: item
    	});
	}
}
