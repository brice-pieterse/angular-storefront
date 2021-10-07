import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service'
import { Product } from '../models/product'

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})

export class DiscoverComponent implements OnInit {

  products: Product[] = []

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe((products) => {
      this.products = products
    })
  }

}
