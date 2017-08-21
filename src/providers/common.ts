import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class CommonService {


  public apiUrl = 'http://192.168.12.180:1337/api/v1/';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private handleError(error: any) {


    return Promise.reject(error.message || error);
  }

  constructor(private http: Http, private toastCtrl: ToastController) {

  }

  //给请求头加上token
  buildTokenHeader() {
    return {
      name: 'Authorization',
      value: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OTk2NmJkM2U0YjA4NzVjMTMxMmViZGUiLCJpYXQiOjE1MDMzMTUwNDR9.SnsWEmfn6B4r_tr7scg1EBE7XAPs8G7X98k-PZAQWXw'
    };
  }


  sendRequest(requestUrl: string, params: any): Promise<any> {
    return this.getNewToken().then((res:any) => {
      params.token = JSON.parse(res._body).token;
      let requestBody = JSON.stringify(params);

      let tokenHeader = this.buildTokenHeader();
      this.headers.set(tokenHeader.name, tokenHeader.value);

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

}
