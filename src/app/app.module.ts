import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DatePickerModule } from 'ng2-datepicker';
import { MyApp } from './app.component';
// import {DndModule} from 'ng2-dnd';
import {GridsterModule} from 'angular-gridster2';

import { AboutPage } from '../pages/about/about';
import { MemberPage } from '../pages/member/member';
import { MemberDetailPage } from '../pages/member/member-detail/member-detail';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//预约模块
import { BookingPage } from '../pages/booking/booking.component';
import { BookingRecording } from '../pages/booking/booking-recording/booking-recording.component';
import { PopParent } from "../pages/booking/pop-add-booking/pop-parent.component"
import { AddBooking } from "../pages/booking/pop-add-booking/add/add-booking.component"
import { BookingTimeSheetComponent } from "../pages/booking/booking-time-sheet/booking-time-sheet.component"

//test
import 'hammerjs';
import {
  MdIconModule,
  MdButtonModule,
  MdSelectModule,
  MdSliderModule,
  MdInputModule,
  MdTooltipModule,
  MdCheckboxModule, MdSidenavModule
} from '@angular/material';
import { TestGridster } from '../pages/booking/test/test.component';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MemberPage,
    MemberDetailPage,


    BookingPage,
    BookingRecording,
    BookingTimeSheetComponent,
    PopParent,
    AddBooking,

    TestGridster,
    TabsPage
  ],
  imports: [
    BrowserModule,
    DatePickerModule,
    IonicModule.forRoot(MyApp),
    GridsterModule,
    BrowserAnimationsModule,
    MdIconModule, MdButtonModule, MdSelectModule, MdInputModule, MdTooltipModule, MdCheckboxModule, MdSidenavModule,
    // DndModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MemberPage,
    MemberDetailPage,

    BookingPage,
    BookingRecording,
    PopParent,
    AddBooking,
    BookingTimeSheetComponent,

    TestGridster,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePickerModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
