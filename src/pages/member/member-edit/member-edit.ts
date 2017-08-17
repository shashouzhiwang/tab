import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-member-edit',
  templateUrl: 'member-edit.html'
})
export class MemberEditPage {
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
  }

}
