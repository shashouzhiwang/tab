import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-member-info',
  templateUrl: 'member-info.html'
})
export class MemberInfoPage {
  id: number;
  type: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.type = this.navParams.get('type');
  }

  goback(){
    this.navCtrl.pop();
  }

  clickCardList(type:string){
    this.type=type;
  }
}
