import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-member-sdc',
  templateUrl: 'member-sdc.html'
})
export class MemberSdcPage {
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
  }

}
