import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-member-edit',
  templateUrl: 'member-edit.html'
})
export class MemberEditPage {
  id: number;
  addressList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
  }

  addAddress() {
    let demo = { province: '', detail_address: '', distance: '' };
    this.addressList.push(demo);
  }
  delAddress(idx: number) {
    this.addressList.splice(idx,1);
  }
}
