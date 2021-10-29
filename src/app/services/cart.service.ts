import { Injectable } from '@angular/core';
import { Product } from '../models/product'
import { CartProduct } from '../models/cartProduct'


@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: CartProduct[] = []

  constructor() {

  }

  getCartProducts(){

    return this.cart

  }

  addToCart(product: CartProduct){

    let found = false
    let index = 0

    while (index < this.cart.length){
      if (this.cart[index].id === product.id){
        found = true
        break
      }
      index++
    }

    if (!found){
      this.cart.push(product)
    }

  }

  removeFromCart(product: CartProduct){

    this.cart = this.cart.filter((item) => {
      return item.id !== product.id
    })

  }

  emptyCart(){

    this.cart = []

  }

}
