import {Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import { SelectMemberComponent } from '../select-member/select-member.component'
import { SelectProjectComponent } from '../select-project/select-project.component'
import { SelectTechniciansComponent } from '../select-technicians/select-technicians.component'
import { SelectBedComponent } from '../select-bed/select-bed.component'
import { TestGridster } from '../../test/test.component';

@Component({
  selector: 'add-booking',
  templateUrl: 'add-booking.html'
})
export class AddBooking {
	@Input() testData: string;
	@Output() openSelectMember: EventEmitter<boolean> = new EventEmitter();
	@ViewChild('addBooking', { read: ElementRef }) content: ElementRef;
	member:string = '';
	projectName:string = '';
	technicians : string ;
	bedName : string;
	constructor(
		public modalCtrl: ModalController,
		public viewCtrl: ViewController
		){

	}
 
	save(){
		this.viewCtrl.dismiss();
	}

	cancle(){
		this.viewCtrl.dismiss();
	}

	selectMember(value){
		let modal = this.modalCtrl.create(SelectMemberComponent, {
			memberName:this.getMember,
			content:this.content
		},{
			cssClass:"select-member-test"
		});
	   modal.onDidDismiss(data => {
	     console.log(data);
	     this.member = data.memberName;
	   });
    	modal.present(); 
	}

	selectProject(value){
		let modal = this.modalCtrl.create(SelectProjectComponent, {
			
		});
	   modal.onDidDismiss(data => {
	     console.log(data);
	     this.projectName = data.projectName.langs;
	   });
    	modal.present();
	}

	selectTechnicians(value){
		let modal = this.modalCtrl.create(SelectTechniciansComponent, {
			
		});
	   modal.onDidDismiss(data => {
	     console.log(data);
	     this.technicians = data.techniciansName.technicians;
	   });
    	modal.present();
	}

	selectBed(value){
		let modal = this.modalCtrl.create(SelectBedComponent, {
			memberName:this.getMember,
			content:this.content
		});
	   modal.onDidDismiss(data => {
	     console.log(data);
	     this.bedName = data.bedName;
	   });
    	modal.present();
	}

	getMember(name){
	} 




}
