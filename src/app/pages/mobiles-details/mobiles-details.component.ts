import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from '../mobiles/mobile.service';
import { CartService } from '../../cart.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-mobiles-details',
  templateUrl: './mobiles-details.component.html',
  styleUrls: ['./mobiles-details.component.css']
})
export class MobilesDetailsComponent implements OnInit {
  selection: any;
  public show:boolean = false;
  public buttonName:any = 'Add to cart';
  cart: any[];
  pincode: number;
  message: string;
  enteredPincode : any;
  constructor(private mobileService: MobileService, private router: Router, private cartService: CartService) { 
    this.selection = this.mobileService.getSelection() || this.mobileService.getAll()[0];
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    if(this.cart.includes(this.selection)){
      this.buttonName = "Go to cart";
    }
    else {
      this.buttonName = "Add to cart";
    }
  }

  public pincodes = [
    "500049",
    "500081",
    "500034"
  ]
  value: any;
  pincodeCheck(form:NgForm){
    // console.log(Object.values(form.value));
    this.enteredPincode = Object.values(form.value);
    this.value = this.pincodes.includes(this.enteredPincode[0]);
  }

  addToCart(product) {
    this.cart = this.cartService.getCart();
    if(this.cart.includes(product)){
      this.router.navigate(['/cart']);
    } else
    {
      this.cartService.addProduct(product);
      this.buttonName = "Go to cart";
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
