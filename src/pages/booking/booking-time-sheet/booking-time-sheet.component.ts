import { Component } from '@angular/core';
import {NavController, NavParams, MenuController, App, Platform, ViewController,PopoverController, ModalController} from 'ionic-angular';
import {GridsterConfig, GridsterItem}  from 'angular-gridster2';
import { BookingRecording } from '../booking-recording/booking-recording.component';
import { AddBooking } from "../pop-add-booking/add/add-booking.component"
import { PopParent } from "../pop-add-booking/pop-parent.component"

import { TestGridster } from '../test/test.component';

import * as $ from 'jquery';

@Component({
  selector: 'booking-time-sheet',
  templateUrl: 'booking-time-sheet.html'
})
export class BookingTimeSheetComponent {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  addBookingPopover : any;
  static colorTimeSheet:Array<Object> = [
      {
      "color": "#65A992",
      "bgColor":"#E2F5EF",
      },
      {
      "color": "#A185B6",
      "bgColor":"#E9EFFF",
      },
      {
      "color": "#65A992",
      "bgColor":"#E2F5EF",
      },
      {
      "color": "#A185B6",
      "bgColor":"#E9EFFF",
      },
      {
      "color": "#65A992",
      "bgColor":"#E2F5EF",
      },
      {
      "color": "#A185B6",
      "bgColor":"#E9EFFF",
      }
  ];

  static eventStop(item, itemComponent, event) {
    console.info('eventStop', item, itemComponent, event);
  }

  static itemChange(item, itemComponent) {
    item.bgcolor = BookingTimeSheetComponent.colorTimeSheet[item.x]["bgColor"];
    item.color = BookingTimeSheetComponent.colorTimeSheet[item.x]["color"];
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  static itemInit(item, itemComponent) {
    console.info('itemInitialized', item, itemComponent);
  }

  emptyCellClick(event, item) {
    console.info('empty cell click', event, item);
    this.dashboard.push(item);
  }

  constructor(
    public navCtrl:NavController,
    public appCtrl:App,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController
  ) {
    this.generatorTime();
  }

  ngOnInit() {
    this.options = {
      gridType: 'fixed',
      compactType: 'none',
      itemChangeCallback: BookingTimeSheetComponent.itemChange,
      itemResizeCallback: BookingTimeSheetComponent.itemResize,
      itemInitCallback: BookingTimeSheetComponent.itemInit,
      margin: 0,
      outerMargin: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 9,
      minRows: 1,
      maxRows: 21,
      maxItemCols: 6,
      minItemCols: 1,
      maxItemRows: 20,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 128,
      fixedRowHeight: 32,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellClickCallback: this.emptyCellClick.bind(this),
      emptyCellDropCallback: this.emptyCellClick.bind(this),
      emptyCellDragCallback: this.emptyCellClick.bind(this),
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      draggable: {
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: BookingTimeSheetComponent.eventStop
      },
      resizable: {
        enabled: false,
        stop: BookingTimeSheetComponent.eventStop,
        handles: {
          s: true,
          e: true,
          n: true,
          w: true,
          se: true,
          ne: true,
          sw: true,
          nw: true
        }
      },
      api: {
        resize: BookingTimeSheetComponent.eventStop,
        optionsChanged: BookingTimeSheetComponent.eventStop,
        getNextPossiblePosition: BookingTimeSheetComponent.eventStop,
      },
      swap: false,
      pushItems: true,
      pushResizeItems: false,
      displayGrid: 'onDrag&Resize',
      disableWindowResize: false
    };

    this.dashboard = [
      {cols: 1, rows: 1, y: 0, x: 0,resizeEnabled: true,bgcolor:BookingTimeSheetComponent.colorTimeSheet[0]["bgColor"],color:BookingTimeSheetComponent.colorTimeSheet[0]['color']},
      {cols: 1, rows: 1, y: 2, x: 2,resizeEnabled: true,bgcolor:BookingTimeSheetComponent.colorTimeSheet[0]["bgColor"],color:BookingTimeSheetComponent.colorTimeSheet[0]['color']}
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }

  goBookingRecording(){
    // this.navCtrl.push(BookingRecording);
    this.navCtrl.push(TestGridster);
  }

  timePeriod:Array<Object> = [];
  bed:Array<Object>= [
    {
    name:"雅苑",
    number:"床位1号(1)"
    },
    {
      name:"雅苑",
      number:"床位1号(1)"
    },
    {
      name:"雅苑",
      number:"床位1号(1)"
    },
    {
      name:"雅苑",
      number:"床位1号(1)"
    },
    {
      name:"雅苑",
      number:"床位1号(1)"
    },
    {
      name:"雅苑",
      number:"床位1号(1)"
    }
    ];

  generatorTime(){
    for(var i:any=0; i<=10; i ++){
      var tem:any = '';
      if(i<10){
        tem = '0'+i+':00';
      }else{
        tem = i+':00';
      }
      this.timePeriod.push({
        name:tem
      })
    }
  }

  dismiss(){
    // this.addBookingPopover.dismiss();
  }

  openModel(myEvent){
    //   this.addBookingPopover = this.popoverCtrl.create(
    //   PopParent,
    //   {
    //     popDismiss: this.dismiss,
    //     test:"popParent data"
    //   },
    //   {
    //     cssClass:"pop-add-adding"
    //   });
    // // popover.present()
    // this.addBookingPopover.present({
    //   ev: myEvent
    // });

    let modal = this.modalCtrl.create(PopParent, myEvent);
    modal.present();
  }

  //折叠
  collapse(e) {
    let bookingContent =  $(e.target).parents('.dk-bookingContent');
    if(bookingContent.hasClass("dk-collapse")){
      bookingContent.animate({
        marginLeft:'10rem'
      },300,function(){
        bookingContent.siblings().show();
        bookingContent.removeClass("dk-collapse");
      })
    }else{
      bookingContent.animate({
        marginLeft:0
      },300,function(){
        bookingContent.siblings().hide();
        bookingContent.addClass("dk-collapse");
      })
    }
  }


}
