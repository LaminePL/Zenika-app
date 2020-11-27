import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#7b1fa2');


  }  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');


  }

  setBorder(color:String){
    let border  = 'solid 4px' + color;
    this.el.nativeElement.style.border = border
  }

  constructor( private el:ElementRef) {
    this.setBorder('#f5f5f5');
   }
   

}
