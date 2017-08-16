import {Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-booking-recording',
  templateUrl: 'booking-recording.html',
})

export class BookingRecording{
	constructor(public navCtrl : NavController,public navParams : NavParams){}

	isSearch:boolean=false;
	items : string[];
    
	searchAnimate : {};
	cancelSearch(){
		this.isSearch=false;
	}
	canSearch(){
		this.isSearch=true;
	}

	goback(){
		this.navCtrl.pop();
	}
	initializeItems() {
	    this.items = [
	      'Amsterdam',
	      'Bogota',
	    ];
	}


	getItems(ev:any){
		this.initializeItems();
 
		let val = ev.target.value;

	    if (val && val.trim() != '') {
	      this.items = this.items.filter((item) => {
	        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      })
	    }
	}

	showRecord(ev:any){
		ev.target;
	}
}