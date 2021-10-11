import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product'

@Component({
  selector: 'app-featured-main',
  templateUrl: './featured-main.component.html',
  styleUrls: ['./featured-main.component.css']
})
export class FeaturedMainComponent implements OnInit {

  @Input() featuredMain: Product
  hovered: boolean;

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
