import {Component} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {
  FormGroup,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'select-technicians',
  templateUrl: 'select-technicians.html'
})
export class SelectTechniciansComponent {
	constructor(
		private navParams : NavParams,
		private viewCtrl : ViewController
		){
	    this.langForm = new FormGroup({
	      "technicians": new FormControl({value: 'rust', disabled: false})
	    });

	}

	technicians;
	langForm;

  selectTechnicians(name){
    let data = {
      techniciansName:name
    }
    this.viewCtrl.dismiss(data);
  }



  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    this.selectTechnicians(this.langForm.value);
    event.preventDefault();
  }
}
