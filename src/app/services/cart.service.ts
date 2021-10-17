import { Injectable } from '@angular/core';
import { Product } from '../models/product'

class CartProduct extends Product {
  quantity: number
  constructor(){
    super()
    this.quantity = 0
  }
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: Product[] = []

  constructor() {

  }

  getCartProducts(){

    return this.cart

  }

  addToCart(product: Product){

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

  removeFromCart(product: Product){

    this.cart = this.cart.filter((item) => {
      return item.id !== product.id
    })

  }

  emptyCart(){

    this.cart = []

  }

}
