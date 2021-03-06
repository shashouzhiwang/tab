import {Component, Output, Input, EventEmitter} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'select-member',
  templateUrl: 'select-member.html'
})
export class SelectMemberComponent {
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
      '陈小姐   15287458546',
      '黄小姐   15287458546',
      '李小姐   15287458546',
      '张小姐   15287458546',
      '王小姐   15287458546',
      '夏小姐   15287458546',
      '曹小姐   15287458546',
      '马小姐   15287458546',
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
      memberName:name
    }
    this.viewCtrl.dismiss(data);
  }

}
