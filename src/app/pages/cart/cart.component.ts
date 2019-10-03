import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MobileService } from '../mobiles/mobile.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedItems = [];
  total = 0;
  constructor(private mobileService: MobileService, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    // console.log(items);
 
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      }
      else{
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = items;
    console.log(this.selectedItems);
    // this.selectedItems = Object.keys(selected).map(key => selected[key])
    //  console.log('Items: ', this.selectedItems);
    //  this.total = items.reduce((a,b) => a + (b.count * b.Price), 0);
   }

}
