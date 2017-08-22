import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { LocalStorageService } from 'angular-2-local-storage';



@Injectable()
export class CommonService {


  public apiUrl = 'http://192.168.12.180:1337/api/v1/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private handleError(error: any) {


    return Promise.reject(error.message || error);
  }

  constructor(private http: Http, private toastCtrl: ToastController, public storage: LocalStorageService) {

  }

  //给请求头加上token
  buildTokenHeader() {
    let token = this.getToken();
    return {
      name: 'Authorization',
      value: 'Bearer ' + token,
    };
  }

  //给请求头加上token
  buildShopHeader() {
    let id: any = this.getShopId();
    return id;
  }


  sendRequest(requestUrl: string, params: any): Promise<any> {
    return this.getNewToken().then((res: any) => {
      params.token = JSON.parse(res._body).token;
      let requestBody = JSON.stringify(params);

      let tokenHeader = this.buildTokenHeader();
      let shopHeader = this.buildShopHeader();
      this.headers.set(tokenHeader.name, tokenHeader.value);
      this.headers.append('shop', shopHeader);
      let requestOptions = new RequestOptions({ headers: this.headers });
      return this.http.post(this.apiUrl + requestUrl, requestBody, requestOptions)
        .toPromise()
        .then(res => this.responseCallback(res.json()))
        .catch(this.handleError);
    });
  }

  responseCallback(res: any): void {
    //请求不正确时提示错误信息
    if (!res.success) {
      this.showToast(res.message);
    }
    //返回数据
    return res;
  }


  showToast(message: string = '', duration: number = 2000, position: string = 'bottom', callbackObject: any = '', callback: any = ''): void {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position,
      cssClass: "toast-message-customs"
    });

    toast.onDidDismiss(() => {
      if (typeof callback == 'function') {
        callback(callbackObject); //callbackObject：即调用方
      }
    });

    toast.present();
  }

  getNewToken() {
    return this.http.get(this.apiUrl + 'token', {})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  setToken(token: string) {
    this.storage.set('token', token);
  }

  //获取token
  getToken() {
    return this.storage.get('token');
  }

  //获取ShopId
  getShopId() {
    return this.storage.get('shop');
  }

  //获取当天日期  返回格式2017-01-01
  getTodayDate() {
    let date = new Date();
    let y=date.getFullYear();
    let m=date.getMonth()+1;
    let d=date.getDate();
    return  y+"-"+(m<10?"0":"")+m+"-"+(d<10?"0":"")+d;
  }

  //日期格式2017-01-01 00:00:00 转化为时间戳
  turnDate(date:string){
    let d=new Date(date);
    return d.getTime();
  }
}
