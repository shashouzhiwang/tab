import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'add-booking',
  templateUrl: 'add-booking.html'
})
export class AddBooking {
	@Input() testData: string;
	@Output() openSelectMember: EventEmitter<boolean> = new EventEmitter();

	constructor(){

	}

	selectMember(value){
		this.openSelectMember.emit(value);
	}

	// sendInfo.emit();
  
}
