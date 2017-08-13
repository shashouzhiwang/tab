import { Component } from '@angular/core';
import {NavController, NavParams, MenuController, App, Platform, ViewController,PopoverController, ModalController} from 'ionic-angular';

import { BookingRecording } from './booking-recording/booking-recording.component';
import { AddBooking } from "./pop-add-booking/add-booking.component"

import { SimpleDndComponent } from './test/test.component';

import * as $ from 'jquery';

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
		// this.navCtrl.push(BookingRecording);
		this.navCtrl.push(SimpleDndComponent);
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

  openModel(myEvent){
    let popover = this.popoverCtrl.create(AddBooking,{

    },{
      "cssClass":"pop-add-adding"
    });
    // popover.present()
    popover.present({
      ev: myEvent
    });
  }

	//折叠
  collapse(e) {
    let bookingContent =  $(e.target).parents('.dk-bookingContent');
    if(bookingContent.hasClass("collapse")){
      bookingContent.animate({
        marginLeft:'10rem'
      },300,function(){
        bookingContent.siblings().show();
        bookingContent.removeClass("collapse");
      })
    }else{
      bookingContent.animate({
        marginLeft:0
      },300,function(){
        bookingContent.siblings().hide();
        bookingContent.addClass("collapse");
      })
    }
  }


}
