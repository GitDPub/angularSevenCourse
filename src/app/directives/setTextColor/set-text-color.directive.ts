import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetTextColor]'
})
export class SetTextColorDirective {

  constructor(elememntRef: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elememntRef.nativeElement, 'color', 'green');
  }

}

// ElementRef -> provee acceso directo al DOM, pero la app se vuelve vulnerable a ataques XSS
// Renderer2 -> provee manipulacion compleja del DOM
