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

  static eventStop(item, itemComponent, event) {
    console.info('eventStop', item, itemComponent, event);
  }

  static itemChange(item, itemComponent) {
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

   ngOnInit() {
     this.options = {
       gridType: 'fit',
       compactType: 'none',
       itemChangeCallback: TestGridster.itemChange,
       itemResizeCallback: TestGridster.itemResize,
       itemInitCallback: TestGridster.itemInit,
       margin: 5,
       outerMargin: true,
       mobileBreakpoint: 640,
       minCols: 1,
       maxCols: 100,
       minRows: 1,
       maxRows: 100,
       maxItemCols: 100,
       minItemCols: 1,
       maxItemRows: 100,
       minItemRows: 1,
       maxItemArea: 2500,
       minItemArea: 1,
       defaultItemCols: 1,
       defaultItemRows: 1,
       fixedColWidth: 105,
       fixedRowHeight: 105,
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
         stop: TestGridster.eventStop
       },
       resizable: {
         enabled: true,
         stop: TestGridster.eventStop,
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
         resize: TestGridster.eventStop,
         optionsChanged: TestGridster.eventStop,
         getNextPossiblePosition: TestGridster.eventStop,
       },
       swap: false,
       pushItems: true,
       pushResizeItems: false,
       displayGrid: 'onDrag&Resize',
       disableWindowResize: false
     };

     this.dashboard = [
       {cols: 2, rows: 1, y: 0, x: 0},
       {cols: 2, rows: 2, y: 0, x: 2, hasContent: true},
       {cols: 1, rows: 1, y: 0, x: 4},
       {cols: 1, rows: 1, y: 2, x: 5},
       {cols: undefined, rows: undefined, y: 1, x: 0},
       {cols: 1, rows: 1, y: undefined, x: undefined},
       {cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2'},
       {cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2'},
       {cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled'},
       {cols: 1, rows: 1, y: 2, x: 4, dragEnabled: false, resizeEnabled: false, label: 'Drag&Resize Disabled'},
       {cols: 1, rows: 1, y: 2, x: 6, initCallback: TestGridster.itemInit}
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
