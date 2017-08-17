import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-member-cbc',
  templateUrl: 'member-cbc.html'
})
export class MemberCbcPage {
  cdcList:any=[];
  id: number;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.cdcList=[{showUseDetail:false},{showUseDetail:false}]
  }

}
