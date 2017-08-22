import { Component } from '@angular/core';
import { NavController, NavParams, ViewController  } from 'ionic-angular';
import { MemberService } from '../../../providers/member';
import { CommonService } from '../../../providers/common';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'page-member-add',
  templateUrl: 'member-add.html'
})
export class MemberAddPage {
  id: number;
  addressList: any = [];
  memberInfo: any={name:'',gendar:'',birthday:'',phoneNo:'',joinDate:'2017-02-01',
  cardNo:'',qq:'',wechat:'',marriage:'',weight:'',height:'',hobby:'',
  industry:'',profession:'',allergy:'',medicalHis:'',remark:'',channel:'',nurse:'',lastNurseDate:'',skin:'',shopId:'',oprater:''};
  shopId:any;
  userInfo:any;

  constructor(public commonSer: CommonService,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public memberSer: MemberService, public storage: LocalStorageService) {
    this.id = this.navParams.get('id');
    this.shopId=this.storage.get('shop');
    this.userInfo=this.storage.get('userInfo');
    this.memberInfo.joinDate=this.commonSer.getTodayDate();
  }

  addAddress() {
    let demo = { province: '', detail_address: '', distance: ''};
    this.addressList.push(demo);
  }
  delAddress(idx: number) {
    this.addressList.splice(idx, 1);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit(){
    this.memberInfo.joinDate=this.commonSer.turnDate(this.memberInfo.joinDate+" 00:00:00");
    this.memberInfo.oprater=this.userInfo.phoneNo;
    this.memberInfo.shopId=this.shopId;
    this.memberSer.addMember(this.memberInfo);
  }
}
