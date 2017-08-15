import { Component } from '@angular/core';
import {NavController, NavParams, MenuController, App, Platform, ViewController,PopoverController, ModalController} from 'ionic-angular';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import { BookingRecording } from './booking-recording/booking-recording.component';
import { AddBooking } from "./pop-add-booking/add-booking.component"
import { BookingTimeSheetComponent } from "./booking-time-sheet/booking-time-sheet.component"

import { TestGridster } from './test/test.component';

import * as $ from 'jquery';

@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html'
})
export class BookingPage {
   date: DateModel;
   options: DatePickerOptions;

  constructor(
		public navCtrl:NavController,
		public appCtrl:App,
		public modalCtrl: ModalController,
		public popoverCtrl: PopoverController
  	) {
  	this.options = new DatePickerOptions();
  }

	goBookingRecording(){
		this.navCtrl.push(BookingRecording);
		// this.navCtrl.push(TestGridster);
	}


}
