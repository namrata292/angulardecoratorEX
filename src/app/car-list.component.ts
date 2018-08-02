import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'product-list',
  templateUrl: './carlist.component.html',
  styles: [`div {background-color: lightblue;}`]
})
export class CarListComponent {
  desc = 'product-list';
  product: Product=new Product();

  receiveClick(x: string) {
    this.desc += ' got click from child component '+x;
  }
}