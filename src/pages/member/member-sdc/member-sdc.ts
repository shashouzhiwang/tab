import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MemberService } from '../../../providers/member';

@Component({
  selector: 'page-member-sdc',
  templateUrl: 'member-sdc.html'
})
export class MemberSdcPage {
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public memberSer:MemberService) {
    this.id = this.navParams.get('id');
  }

  //获取储蓄卡列表
  getPrepaidCards(){
    this.memberSer.getPrepaidCards().then(res=>{console.log(res,111111)});
  }
}
