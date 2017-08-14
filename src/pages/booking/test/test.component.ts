import {GridsterConfig, GridsterItem}  from 'angular-gridster2';
   
import {Component} from '@angular/core';

@Component({
  selector: 'test-gridster',
  templateUrl:"test.html"
})
export class TestGridster {
  // simpleDrop: any = null;
   options: GridsterConfig;
   dashboard: Array<GridsterItem>;

   static itemChange(item, itemComponent) {
     console.info('itemChanged', item, itemComponent);
   }
 
   static itemResize(item, itemComponent) {
     console.info('itemResized', item, itemComponent);
   }
 
   ngOnInit() {
     this.options = {
       itemChangeCallback: TestGridster.itemChange,
       itemResizeCallback: TestGridster.itemResize,
     };
 
     this.dashboard = [
       {cols: 2, rows: 1, y: 0, x: 0},
       {cols: 2, rows: 2, y: 0, x: 2}
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
}
