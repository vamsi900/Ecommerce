import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cart = [];
  items = [];
  title = 'ecommerce';
  constructor(private router: Router, private cartService: CartService){ }

  openCart(){
    this.router.navigate(['cart']);
  }

  ngOnInit(){
    this.cart=this.cartService.getCart();
  }
}
