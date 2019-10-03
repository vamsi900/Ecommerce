import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];
  constructor() { }

  getCart(){
    console.log('returning cart');
    return this.cart;
  }

  addProduct(selection){
    this.cart.push(selection);
    console.log('pushed product to cart');
  }
}
