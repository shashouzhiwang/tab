import {Component, Input} from '@angular/core';
import {PopoverController,NavParams} from 'ionic-angular';

import { AddBooking } from "./add/add-booking.component"
import * as $ from 'jquery';


@Component({
  selector: 'pop-parent',
  templateUrl: 'pop-parent.html'
})
export class PopParent {
	@Input() test:string = "parent Data";

	popSourceData : any;
	popDismiss : any;

	constructor(
		public viewCtrl: PopoverController,
		private navParams: NavParams
		){
		this.popSourceData = navParams.data.test;
		this.popDismiss = navParams.data.popDismiss;
	}

	openSelectMember(e){
		// let $addBooking = $(e.target).parents('add-booking');
		// $addBooking.addClass('fadeOut');
		this.popDismiss();
	}

}
