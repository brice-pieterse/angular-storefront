import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { CartService } from '../services/cart.service'

class CartProduct extends Product {
  quantity: number

  constructor(){
    super()
    this.quantity = 0
  }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  items: CartProduct[] = []

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.items = this.cartService.getCartProducts()
  }

  emptyCart(){
    this.items = []
    this.cartService.emptyCart()
  }

}
