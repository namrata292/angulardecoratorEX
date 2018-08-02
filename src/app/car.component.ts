import { Component, HostListener, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'my-car',
  template: '<div>{{desc}}</div><div>@Input {{parent}} {{data.length}}</div><div><table><tr *ngFor="let item of data;"><td>334</td><td>343343</td><td>3433333333333</td></tr></table></div>',
  styles: ['div {background-color: red}']
})
export class CarComponent implements OnInit {
 
  desc = 'product-data'
  @Input('parentName') parent: string;
  @Input() data1:Array<String>;
  data:Array<String>;
  @Output('clickHappen') clickHappen: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.data = this.data1;
  }

  

  @HostListener('click')
  onClick(){
    this.desc += ' clicked!'
    this.clickHappen.emit('click happened!');
  }
}