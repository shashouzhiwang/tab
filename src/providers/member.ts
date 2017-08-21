import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { CommonService } from './common';



@Injectable()
export class MemberService {

  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }

  constructor(public commonService: CommonService) {

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


}
