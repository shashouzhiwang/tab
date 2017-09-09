import { Component,Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MemberService } from '../../../providers/member';

@Component({
  selector: 'page-member-sdc',
  templateUrl: 'member-sdc.html'
})
export class MemberSdcPage {
  id: number;
  @Input() prepaidCards:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public memberSer:MemberService) {
    this.id = this.navParams.get('id');
  }
}
