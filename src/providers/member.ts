import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { CommonService } from './common';
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable()
export class MemberService {
  shopId:any;

  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }

  constructor(public commonService: CommonService,public storage: LocalStorageService) {
    this.shopId=this.storage.get('shop');
  }

  //新增会员
  addMember(params:any){
      return this.commonService.sendRequest('post','member/add', params)
      .then(res => res)
      .catch(this.handleError);
  }


  //获取会员列表
  getMemberList(){
    return this.commonService.sendRequest('get','member/list?shopId='+this.shopId)
    .then(res => res)
    .catch(this.handleError);
  }

  //获取会员详情
  getMemberDetail(id:string){
    return this.commonService.sendRequest('get','member/get?memberId='+id+'&shopId='+this.shopId)
    .then(res => res)
    .catch(this.handleError);
  }

  //获取该商店的会员等级
  getMemberLevel(){
    return this.commonService.sendRequest('get','member/queryLevel?shopId='+this.shopId)
    .then(res => res)
    .catch(this.handleError);
  }

  //获取套餐次卡
  getComboCard(id:string){
    return this.commonService.sendRequest('get','member/queryByMemberId?memberId='+id)
    .then(res => res)
    .catch(this.handleError);
  }
}
