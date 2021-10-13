import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service'
import { Product } from '../models/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  product: Product

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getProduct(1).subscribe(product => {
      if (product){
        this.product = product
      }
    })
  }

}
