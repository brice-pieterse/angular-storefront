import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { CartService } from '../services/cart.service'
import { Product } from '../models/product'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentRoute: string = '/'
  private _cartCount: number

  @Input() 
  set cartCount(val: number){
    this._cartCount = val
    this.updateCartCount()
  }

  get cartCount(): number {
    return this._cartCount
  }

  @ViewChild('cartButton') cartButton: ElementRef;

  constructor(private router: Router, private cartService: CartService) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        this.currentRoute = event.url
      }
    })

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    let cartIcon = document.createElement('p');
    
    (function (element: HTMLElement, props: {[key: string]: string}){

      const propKeys = Object.keys(props)

      for (let prop of propKeys){
        element.style.setProperty(prop, props[prop])
      }

    })(cartIcon, {
      "content": "",
      "background-color": "#4390EF",
      "min-width": "20px",
      "height": "20px",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center",
      "text-align": "center",
      "border-radius": "30px",
      "position": "absolute",
      "top": "12px",
      "right": "-8px",
      "font-size": "13px",
      "font-family": "sans-serif",
      "font-weight": "400",
      "color": "white"
    })

    this.cartButton.nativeElement.append(cartIcon)
    this.updateCartCount()

  }

  updateCartCount(): void {
    if (this.cartButton){
      this.cartButton.nativeElement.getElementsByTagName('p')[0].innerText = this.cartCount.toString()
    }
  }

}
