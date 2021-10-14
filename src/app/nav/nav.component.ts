import { CssSelector } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentRoute: string = '/'
  cartCount: number = 0

  @ViewChild('cartButton') cartButton: ElementRef;

  constructor(private router: Router, private cartService: CartService) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        this.currentRoute = event.url
      }
    })

  }

  ngOnInit(): void {
    this.cartCount = this.cartService.getCartProducts.length

  }

  ngAfterViewInit() {
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

    cartIcon.innerText = this.cartCount.toString()

    this.cartButton.nativeElement.append(cartIcon)
  }

}
