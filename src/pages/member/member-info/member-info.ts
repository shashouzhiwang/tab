import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-member-info',
  templateUrl: 'member-info.html'
})
export class MemberInfoPage {
  type: string;
  memberInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.memberInfo = this.navParams.get('memberInfo');
    this.type = this.navParams.get('type');
  }

  goback(){
    this.navCtrl.pop();
  }

  clickCardList(type:string){
    this.type=type;
  }
}
