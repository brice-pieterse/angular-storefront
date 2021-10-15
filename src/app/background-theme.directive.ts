import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundTheme]'
})
export class BackgroundThemeDirective {

  @Input() bgImage: string;

  constructor(private el: ElementRef) {
    
  }

  ngOnInit(){
    this.el.nativeElement.style.backgroundImage = `url("../assets/product-bg/${this.bgImage}")`
    this.el.nativeElement.style.backgroundPosition = 'center'
    this.el.nativeElement.style.backgroundSize = 'cover'
    this.el.nativeElement.style.backgroundRepeat = 'no-repeat'
  
  }

}
