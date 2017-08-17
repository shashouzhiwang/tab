import { Component,Input,EventEmitter,Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MemberInfoPage} from '../member-info/member-info';


@Component({
  selector: 'page-member-detail',
  templateUrl: 'member-detail.html'
})
export class MemberDetailPage {
  _id:number;

  @Input() isJump:boolean;
  @Input() type:string;
  @Input() set id(id:number){
    this._id=id;
  }

  @Output() outType = new EventEmitter<any>();

  get id():number {return this.id};

  constructor(public navCtrl: NavController) {
  }

  goSdc(){
    if(!this.isJump){
      this.navCtrl.push(MemberInfoPage,{id:this._id,type:'sdc'});
    }else{
      this.outType.emit('sdc');
    }
  }
  goCdc(){
    if(!this.isJump){
      this.navCtrl.push(MemberInfoPage,{id:this._id,type:'cbc'});
    }else{
      this.outType.emit('cbc');
    }
  }
  goEdit(){
    if(!this.isJump){
      this.navCtrl.push(MemberInfoPage,{id:this._id,type:'edit'});
    }else{
      this.outType.emit('edit');
    }
  }
}
