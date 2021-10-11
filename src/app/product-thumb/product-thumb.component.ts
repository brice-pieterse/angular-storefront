import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product'

@Component({
  selector: 'app-product-thumb',
  templateUrl: './product-thumb.component.html',
  styleUrls: ['./product-thumb.component.css']
})
export class ProductThumbComponent implements OnInit {

  @Input() product: Product
  hovered: boolean

  constructor() { }

  ngOnInit(): void {
  }

  setHovered(){
    this.hovered = true
  }

  setHoverOut(){
    this.hovered = false
  }

}
