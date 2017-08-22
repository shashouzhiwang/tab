import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DatePickerModule } from 'ng2-datepicker';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
// import {DndModule} from 'ng2-dnd';
import { GridsterModule } from 'angular-gridster2';
// import { MyDatePickerModule } from 'angular2-datepicker/src/my-date-picker/my-date-picker.module';
import { LocalStorageModule } from 'angular-2-local-storage';


import { AboutPage } from '../pages/about/about';
import { MemberPage } from '../pages/member/member';
import { MemberDetailPage } from '../pages/member/member-detail/member-detail';
import { MemberSdcPage } from '../pages/member/member-sdc/member-sdc';
import { MemberCbcPage } from '../pages/member/member-cbc/member-cbc';
import { MemberEditPage } from '../pages/member/member-edit/member-edit';
import { MemberInfoPage } from '../pages/member/member-info/member-info';
import { MemberAddPage } from '../pages/member/member-add/member-add';
import { LoginPage } from '../pages/member/login/login';


import { TabsPage } from '../pages/tabs/tabs';

import { CommonService } from '../providers/common';
import { MemberService } from '../providers/member';
import { LoginService } from '../providers/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//预约模块
import { BookingPage } from '../pages/booking/booking.component';
import { BookingRecording } from '../pages/booking/booking-recording/booking-recording.component';
import { PopParent } from "../pages/booking/pop-add-booking/pop-parent.component"
import { AddBooking } from "../pages/booking/pop-add-booking/add/add-booking.component"
import { BookingTimeSheetComponent } from "../pages/booking/booking-time-sheet/booking-time-sheet.component"
import { SelectTechniciansComponent } from "../pages/booking/pop-add-booking/select-technicians/select-technicians.component"
import { SelectProjectComponent } from "../pages/booking/pop-add-booking/select-project/select-project.component"
import { SelectMemberComponent } from "../pages/booking/pop-add-booking/select-member/select-member.component"
import { SelectBedComponent } from "../pages/booking/pop-add-booking/select-bed/select-bed.component"
//test
// import 'hammerjs';
// import {
//   MdIconModule,
//   MdButtonModule,
//   MdSelectModule,
//   MdSliderModule,
//   MdInputModule,
//   MdTooltipModule,
//   MdCheckboxModule, MdSidenavModule
// } from '@angular/material';
import { TestGridster } from '../pages/booking/test/test.component';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MemberPage,
    MemberDetailPage,
    MemberSdcPage,
    MemberCbcPage,
    MemberEditPage,
    MemberInfoPage,
    MemberAddPage,
    LoginPage,

    BookingPage,
    BookingRecording,
    BookingTimeSheetComponent,
    PopParent,
    AddBooking,
    SelectTechniciansComponent,
    SelectProjectComponent,
    SelectMemberComponent,
    SelectBedComponent,

    TestGridster,
    TabsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    DatePickerModule,
    GridsterModule,
    BrowserAnimationsModule,
    // MdIconModule, MdButtonModule, MdSelectModule, MdInputModule, MdTooltipModule, MdCheckboxModule, MdSidenavModule,
    // IonicModule.forRoot(MyApp,{
    //   backButtonIcon:'md-arrow-back',
    //   backButtonText:'',
    //   iconMode:'ios',
    //   modalEnter:'modal-slide-in',
    //   modalLeave:'modal-slide-out',
    //   tabsPlacement:'bottom',
    //   pageTransition:'ios-transition',
    //   swipeBackEnabled:true
    // }),
    LocalStorageModule.withConfig({
        prefix: 'dkdoo',
        storageType: 'localStorage'
    }),
    // MyDatePickerModule,
    // DndModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MemberPage,
    MemberDetailPage,
    MemberSdcPage,
    MemberCbcPage,
    MemberEditPage,
    MemberInfoPage,
    MemberAddPage,
    LoginPage,

    BookingPage,
    BookingRecording,
    PopParent,
    AddBooking,
    BookingTimeSheetComponent,
    SelectTechniciansComponent,
    SelectProjectComponent,
    SelectMemberComponent,
    SelectBedComponent,

    TestGridster,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,
    MemberService,
    LoginService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
})
export class AppModule {

 }
