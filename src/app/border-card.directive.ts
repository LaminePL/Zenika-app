import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})

export class BorderCardDirective {
  constructor(private el: ElementRef, private rendrer: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.rendrer.addClass(this.el.nativeElement, 'colored-border');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.rendrer.removeClass(this.el.nativeElement, 'colored-border');
    this.rendrer.addClass(this.el.nativeElement, 'border');
  }
}
