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

  cart: CartProduct[] = []

  constructor() {

  }

  getCartProducts(){
    return this.cart
  }

  addToCart(product: Product, quantity: number){

    let notFound = true
    let index = 0

    while (notFound && index <= this.cart.length){
      if (this.cart[index].id === product.id){
        this.cart[index].quantity += quantity
        notFound = false
        break
      }
      index++
    }

    if (notFound){
      const cartItem = Object.assign({quantity: quantity}, product)
      this.cart.push(cartItem)
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
