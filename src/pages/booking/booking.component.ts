import { Component } from '@angular/core';
import {NavController, NavParams, MenuController, App, Platform, ViewController,PopoverController, ModalController} from 'ionic-angular';

import { BookingRecording } from './booking-recording/booking-recording.component';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {

  constructor(
		public navCtrl:NavController,
		public appCtrl:App,
		public modalCtrl: ModalController,
		public popoverCtrl: PopoverController
  	) {
	this.generatorTime();
  }

	goBookingRecording(){	
		this.navCtrl.push(BookingRecording);
	} 

	timePeriod:Array<Object> = [];
	bed:Array<Object>= [{
		name:"雅苑",
		number:"床位1号(1)"
	},
	{
		name:"雅苑",
		number:"床位1号(1)"
	},
	{
		name:"雅苑",
		number:"床位1号(1)"
	},
	{
		name:"雅苑",
		number:"床位1号(1)"
	},
	{
		name:"雅苑",
		number:"床位1号(1)"
	},
	{
		name:"雅苑",
		number:"床位1号(1)"
	},
	{
		name:"雅苑",
		number:"床位1号(1)"
	},
	{
		name:"雅苑",
		number:"床位1号(1)"
	},
	{
		name:"雅苑",
		number:"床位1号(1)"
	},];

	generatorTime(){
		
		for(var i:any=0; i<=24; i ++){
			var tem:any = '';
			if(i<10){
				tem = '0'+i+':00';
			}else{
				tem = i+':00';
			}
			this.timePeriod.push({
				name:tem
			})
		}
	}

	

}
