import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { CommonService } from './common';
import { LocalStorageService } from 'angular-2-local-storage';



@Injectable()
export class LoginService {

  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }

  constructor(public commonService: CommonService, public storage: LocalStorageService) {

  }

  //登陆
  login(params: any) {
    params.shopIdentity = "";
    return this.commonService.sendRequest('post','auth/login', params)
      .then(res => this.loginCallback(res))
      .catch(this.handleError);
  }

  loginCallback(res) {
    if (res.success) {
      this.storage.set('userInfo', res.user);
      this.storage.set('shop', res.shop.id);
      this.commonService.setToken(res.token);
    }
    return res;
  }
}
