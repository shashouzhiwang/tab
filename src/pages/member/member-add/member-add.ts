import { Component } from '@angular/core';
import { NavController, NavParams, ViewController  } from 'ionic-angular';
import { MemberService } from '../../../providers/member';

@Component({
  selector: 'page-member-add',
  templateUrl: 'member-add.html'
})
export class MemberAddPage {
  id: number;
  addressList: any = [];
  memberInfo: any={name:'',gendar:'',birthday:'',phoneNo:'',joinDate:'',
  cardNo:'',qq:'',wechat:'',marriage:'',weight:'',height:'',hobby:'',
  industry:'',profession:'',allergy:'',medicalHis:'',remark:'',channel:'',nurse:'',lastNurseDate:'',skin:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public memberSer: MemberService) {
    this.id = this.navParams.get('id');
  }

  addAddress() {
    let demo = { province: '', detail_address: '', distance: '' };
    this.addressList.push(demo);
  }
  delAddress(idx: number) {
    this.addressList.splice(idx, 1);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit(){
    this.memberSer.addMember(this.memberInfo);
  }
}
