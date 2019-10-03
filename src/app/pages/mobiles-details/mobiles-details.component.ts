import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from '../mobiles/mobile.service';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-mobiles-details',
  templateUrl: './mobiles-details.component.html',
  styleUrls: ['./mobiles-details.component.css']
})
export class MobilesDetailsComponent implements OnInit {
  selection: any;
  constructor(private mobileService: MobileService, private router: Router, private cartService: CartService) { 
    this.selection = this.mobileService.getSelection() || this.mobileService.getAll()[0];
  }

  ngOnInit() {
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

}
