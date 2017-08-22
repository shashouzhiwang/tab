import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../../providers/login';
import { TabsPage } from '../../tabs/tabs';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(public navCtrl: NavController,public loginSer: LoginService,public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
        userIdentity: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])]
      })
  }

  login(form:any){
    this.loginSer.login(form).then(res=>{
      if(res.success){
        this.navCtrl.push(TabsPage);
      }
    });
  }

}
