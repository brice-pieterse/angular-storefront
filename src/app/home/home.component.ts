import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service'
import { Product } from '../models/product'
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartCount: number = 0
  featuredProducts: Product[] = []
  featuredMain: Product;

  constructor(private inventoryService: InventoryService, private cartService: CartService) {
    
   }

  ngOnInit(): void {

    // get the products marked to be featured on home
    this.inventoryService.getInventory().subscribe(products => {
      this.featuredProducts = products.filter(item => {
        return item.featured
      })

      this.featuredMain = this.featuredProducts[0]

    })
    
    this.cartCount = this.cartService.getCartProducts().length

  }

}
