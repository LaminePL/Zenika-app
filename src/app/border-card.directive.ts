import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#7b1fa2');

  } @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setBorder(color: String) {
    let border = 'solid 1px' + color;
    this.rendrer.setStyle(this.el.nativeElement, "border", border);
  }
  constructor(private el: ElementRef, private rendrer: Renderer2) {
    this.setBorder('#f5f5f5');
  }


}
