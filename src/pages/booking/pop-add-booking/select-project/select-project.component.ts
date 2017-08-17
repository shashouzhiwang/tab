import {Component} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import {
  FormGroup,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'select-project',
  templateUrl: 'select-project.html'
})
export class SelectProjectComponent {
	project: Array<object> ;
	langs;
	langForm;
	constructor(
		private navParams : NavParams,
		private viewCtrl : ViewController
		){

	    this.langForm = new FormGroup({
	      "langs": new FormControl({value: 'rust', disabled: false})
	    });
	}


  selectProject(name){
    let data = {
      projectName:name
    }
    this.viewCtrl.dismiss(data);
  }



  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    this.selectProject(this.langForm.value);
    event.preventDefault();
  }

}
