import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { LoginPage } from "./login/login";
import { MemberAddPage } from "./member-add/member-add";
import { MemberService } from '../../providers/member';

@Component({
  selector: 'page-member',
  templateUrl: 'member.html'
})
export class MemberPage {
  isSearch: boolean = false;
  memberList: any = [];
  id:string;
  memberInfo: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public memberSer:MemberService) {
    // for(let i=1;i<15;i++){
    //   let list={
    //     id:i,
    //     name: '黄女士',
    //     phone: 15800274113,
    //     role: 'vip',
    //     consume_time: '2017.07.20',
    //   };
    //   this.memberList.push(list);
    // }

    this.getMemberList();
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

  getMemberDetail(id:string){
    this.memberSer.getMemberDetail(id).then(res=>{
      this.memberInfo=res.member;
    });
    this.id=id;
  }

  openModal(){
    let modal = this.modalCtrl.create(MemberAddPage);
    modal.present();
  }

  getMemberList(){
     this.memberSer.getMemberList().then(res=>{
       this.memberList=res.members;
     });
  }
}
