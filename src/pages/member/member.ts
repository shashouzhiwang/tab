import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "./login/login";

@Component({
  selector: 'page-member',
  templateUrl: 'member.html'
})
export class MemberPage {
  isSearch:boolean=false;


  constructor(public navCtrl: NavController) {

  }

  cancelSearch(){
		this.isSearch=false;
	}
	canSearch(){
		this.isSearch=true;
	}

  gologin(){
    this.navCtrl.push(LoginPage);
  }
}
