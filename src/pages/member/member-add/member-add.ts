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
  memberInfo: any = {
    name: '', gendar: 2, birthday: '', phoneNo: '', joinDate: '',level:'',
    cardNo: '', qq: '', wechat: '', marriage: '', weight: '', height: '', hobby: '',
    industry: '', profession: '', allergy: '', medicalHis: '', remark: '', channel: '', nurse: '', lastNurseDate: '', skin: '', shopId: '', oprater: '', address: ''
  };
  shopId: any;
  userInfo: any;
  province: any;
  provinceId: number;
  city: any;
  cityId: number;
  area: any;
  areaId: number;
  level:any;

  constructor(public commonSer: CommonService, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public memberSer: MemberService, public storage: LocalStorageService) {
    this.id = this.navParams.get('id');
    this.shopId = this.storage.get('shop');
    this.userInfo = this.storage.get('userInfo');
    this.memberInfo.joinDate = this.commonSer.getTodayDate();
    this.getProvince();
    this.getMemberLevel();
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

  getProvince() {
    this.commonSer.getProvince().then(res => {
      this.province = res.cities;
    });
  }

  chooseProvince() {
    this.commonSer.getCity(this.provinceId).then(res => {
      this.city = res.cities;
      if(this.city.length>0){
        this.cityId = this.city[0].id;
        this.chooseCity();
      }else{
        this.area =[];
        this.areaId=0;
      }
    });
  }

  chooseCity() {
    this.commonSer.getArea(this.provinceId,this.cityId).then(res => {
      this.area = res.cities;
      if(this.area.length>0){
        this.areaId = this.area[0].id
      }
    });
  }

  getMemberLevel(){
    this.memberSer.getMemberLevel().then(res=>{
      this.level=res.levels;
    });
  }

  submit() {
    this.memberInfo.joinDate = this.commonSer.turnDate(this.memberInfo.joinDate + " 00:00:00");
    this.memberInfo.birthday = this.commonSer.turnDate(this.memberInfo.birthday + " 00:00:00");
    this.memberInfo.oprater = this.userInfo.phoneNo;
    this.memberInfo.shopId = this.shopId;
    this.memberSer.addMember(this.memberInfo);
  }
}
