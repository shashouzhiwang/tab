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
      return this.commonService.sendRequest('member/add', params)
      .then(res => res)
      .catch(this.handleError);
  }

  //获取储蓄卡列表
  getPrepaidCards(){
    return this.commonService.sendRequest('prepaidCards',{})
    .then(res => res)
    .catch(this.handleError);
  }

  //获取会员列表
  getMemberList(){
    return this.commonService.sendRequest('member/list?shopId='+this.shopId,{})
    .then(res => res)
    .catch(this.handleError);
  }

  //获取会员详情
  getMemberDetail(id:string){
    return this.commonService.sendRequest('member/get?memberId='+id+'&shopId='+this.shopId,{})
    .then(res => res)
    .catch(this.handleError);
  }
}
