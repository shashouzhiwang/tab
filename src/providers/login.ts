import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { CommonService } from './common';



@Injectable()
export class LoginService {

  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }

  constructor(public commonService: CommonService) {

  }

  //登陆
  login(params: any) {
    params.shopIdentity="";
    return this.commonService.sendRequest('auth/login', params)
      .then(res => res)
      .catch(this.handleError);
  }


}
