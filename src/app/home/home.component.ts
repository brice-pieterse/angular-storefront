import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service'
import { Product } from '../models/product'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProducts: Product[] = []
  featuredMain: Product;

  constructor(private inventoryService: InventoryService) {
    
   }

  ngOnInit(): void {

    // get the products marked to be featured on home
    this.inventoryService.getInventory().subscribe(products => {
      this.featuredProducts = products.filter(item => {
        return item.featured
      })

      this.featuredMain = this.featuredProducts[0]

    })

  }

}
