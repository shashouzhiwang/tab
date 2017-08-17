import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "./login/login";

@Component({
  selector: 'page-member',
  templateUrl: 'member.html'
})
export class MemberPage {
  isSearch: boolean = false;
  memberList: any = [];
  id:number;

  constructor(public navCtrl: NavController) {
    for(let i=1;i<15;i++){
      let list={
        id:i,
        name: '黄女士',
        phone: 15800274113,
        role: 'vip',
        consume_time: '2017.07.20',
      };
      this.memberList.push(list);
    }
  }

  cancelSearch() {
    this.isSearch = false;
  }
  canSearch() {
    this.isSearch = true;
  }

  gologin() {
    this.navCtrl.push(LoginPage);
  }

  getMemberDetail(id:number){
    this.id=id;
  }
}
