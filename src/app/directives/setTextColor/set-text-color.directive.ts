import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetTextColor]'
})
export class SetTextColorDirective {

  constructor(elememntRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elememntRef.nativeElement, 'color', 'green');
  }

}
