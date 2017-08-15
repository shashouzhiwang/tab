import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MemberPage } from '../member/member';
import { BookingPage } from '../booking/booking.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BookingPage;
  tab2Root = AboutPage;
  tab3Root = MemberPage;

  constructor() {

  }
}
