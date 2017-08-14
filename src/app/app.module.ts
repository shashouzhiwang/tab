import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import {DndModule} from 'ng2-dnd';
import {GridsterModule} from 'angular-gridster2';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//预约模块
import { BookingPage } from '../pages/booking/booking.component';
import { BookingRecording } from '../pages/booking/booking-recording/booking-recording.component';
import { AddBooking } from "../pages/booking/pop-add-booking/add-booking.component"

//test
import { TestGridster } from '../pages/booking/test/test.component';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,

    BookingPage,
    BookingRecording,
    AddBooking,

    TestGridster,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GridsterModule
    // DndModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,

    BookingPage,
    BookingRecording,
    AddBooking,

    TestGridster,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
