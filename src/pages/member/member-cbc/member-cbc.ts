import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MemberService } from '../../../providers/member';

@Component({
  selector: 'page-member-cbc',
  templateUrl: 'member-cbc.html'
})
export class MemberCbcPage {
  cdcList:any=[];
  _id:string;
  @Input() set id(id:string){
    this._id=id;
      this.getComboCard();
  };
  get id(): string { return this._id; }

  constructor(public navCtrl: NavController,public navParams: NavParams,public memberSer: MemberService) {

  }


  getComboCard(){
    this.memberSer.getComboCard(this._id).then(res=>{
      if(res && res.data && res.data.length>0){
        this.cdcList=res.data;
        for(let i=0;i<this.cdcList.length;i++){
          this.cdcList[i].showUseDetail=false;
        }
      }
      console.log(this.cdcList,22);
    });
  }
}
