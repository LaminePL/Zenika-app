import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})

export class BorderCardDirective {
  constructor(private el: ElementRef, private rendrer: Renderer2) {
  }
  @HostBinding('class.colored-border') border: boolean;
  @HostListener('mouseenter') onMouseEnter() {
    this.border = true;
    // this.rendrer.addClass(this.el.nativeElement, 'colored-border');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.border = false;
    // this.rendrer.removeClass(this.el.nativeElement, 'colored-border');
  }
}
