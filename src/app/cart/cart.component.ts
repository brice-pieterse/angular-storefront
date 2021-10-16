import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { CartService } from '../services/cart.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartCount: number = 0
  cartTotal: number
  items: Product[] = []

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {

    this.items = this.cartService.getCartProducts()
    this.cartCount = this.items.length
    this.cartTotal = this.items.reduce((acc, item) => {
      return acc += item.price
    }, 0)

  }

  emptyCart(){

    this.items = []
    this.cartService.emptyCart()

  }

  removeItem(item: Product){

    this.cartService.removeFromCart(item)

    this.items = this.items.filter(it => {
      return it.id != item.id
    })

    this.cartCount = this.items.length

  }

}
