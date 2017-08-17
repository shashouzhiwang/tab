import {Component, Output, Input, EventEmitter} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'select-bed',
  templateUrl: 'select-bed.html'
})
export class SelectBedComponent {
  @Output() getMember:EventEmitter<boolean> = new EventEmitter();

  items;
  parentGetMemberFn : any;
  content: any;

  constructor(
      private navParams: NavParams,
      private viewCtrl: ViewController
    ) {
    this.initializeItems();
    this.parentGetMemberFn = navParams.data.memberName;
    this.content = navParams.data.content
  }

  initializeItems() {
    this.items = [
      '雅苑   床位1号',
      '雅苑   床位2号',
      '雅苑   床位3号',
      '雅苑   床位4号',
      '雅苑   床位5号',
      '雅苑   床位6号',
      '雅苑   床位7号',
      '雅苑   床位8号',
      '雅苑   床位9号',
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selectItem(name){
    let data = {
      bedName:name
    }
    this.viewCtrl.dismiss(data);
  }

}
