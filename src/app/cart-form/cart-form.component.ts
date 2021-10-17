import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'
import { AbstractControl } from '@angular/forms'

interface Receipt {
  name: string
  email: string
  address: string
  state: string
  country: string
  card: string
  pin: string
}

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})

export class CartFormComponent implements OnInit {

  @Output() placeOrder: EventEmitter<Receipt> = new EventEmitter;

  name: string
  email: string
  address: string
  state: string
  country: string
  card: string
  pin: string

  constructor() { 
  }

  ngOnInit(): void {
  }

  submitOrder(): void {
    const $this = this
    this.placeOrder.emit({
      name: this.name,
      email: this.email,
      address: this.address,
      state: this.state,
      country: this.country,
      card: this.card,
      pin: this.pin
    })
  }

}
