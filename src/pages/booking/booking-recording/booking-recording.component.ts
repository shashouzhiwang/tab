import {Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-booking-recording',
  templateUrl: 'booking-recording.html',
})

export class BookingRecording {
  memberList: any = [];
  isSearch: boolean = false;
  items: string[];
  id: number;


  searchAnimate: {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 1; i < 15; i++) {
      let list = {
        id: i,
        name: '黄女士',
        phone: 15800274113,
        role: 'vip',
        consume_time: '2017.07.20',
      };
      this.memberList.push(list);
    }
  }

  cancelSearch() {
    this.isSearch = false;
  }
  canSearch() {
    this.isSearch = true;
  }

  goback() {
    this.navCtrl.pop();
  }
  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
    ];
  }

  getDetail(id: number) {
    this.id = id;
  }

  getItems(ev: any) {
    this.initializeItems();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  showRecord(ev: any) {
    ev.target;
  }
}
