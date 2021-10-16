import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service'
import { CartService } from '../services/cart.service'
import { Product } from '../models/product'
import { ActivatedRoute } from  '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  cartCount: number
  product: Product

  constructor(private inventoryService: InventoryService, private cartService: CartService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.inventoryService.getProduct(id).subscribe(product => {
      if (product){
        this.product = product
      }
    })

    this.cartCount = this.cartService.getCartProducts().length

  }

  addToCart(): void {
    this.cartService.addToCart(this.product)
    this.cartCount = this.cartService.getCartProducts().length
  }

  

}
