import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentRoute: string = '/'

  constructor(private router: Router) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        this.currentRoute = event.url
      }
    })
    
  }

  ngOnInit(): void {
  }

}
