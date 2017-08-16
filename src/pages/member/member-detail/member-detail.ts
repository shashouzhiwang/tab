import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MemberSdcPage} from '../member-sdc/member-sdc'

@Component({
  selector: 'page-member-detail',
  templateUrl: 'member-detail.html'
})
export class MemberDetailPage {

  constructor(public navCtrl: NavController) {

  }

  goSdc(){
    this.navCtrl.push(MemberSdcPage);
  }
}
