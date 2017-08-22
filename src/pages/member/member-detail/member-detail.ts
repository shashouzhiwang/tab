import { Component,Input,EventEmitter,Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MemberInfoPage} from '../member-info/member-info';


@Component({
  selector: 'page-member-detail',
  templateUrl: 'member-detail.html'
})
export class MemberDetailPage {

  @Input() isJump:boolean;
  @Input() type:string;
  @Input() memberInfo:any;
  @Input() id:number;

  @Output() outType = new EventEmitter<any>();


  constructor(public navCtrl: NavController) {
  }

  goSdc(){
    if(!this.isJump){
      this.navCtrl.push(MemberInfoPage,{memberInfo:this.memberInfo,type:'sdc'});
    }else{
      this.outType.emit('sdc');
    }
  }
  goCdc(){
    if(!this.isJump){
      this.navCtrl.push(MemberInfoPage,{memberInfo:this.memberInfo,type:'cbc'});
    }else{
      this.outType.emit('cbc');
    }
  }
  goEdit(){
    if(!this.isJump){
      this.navCtrl.push(MemberInfoPage,{memberInfo:this.memberInfo,type:'edit'});
    }else{
      this.outType.emit('edit');
    }
  }
}
