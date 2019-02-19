import { Directive, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddElementText]'
})
export class AddElementTextDirective implements OnInit{

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
    ) { }

  ngOnInit() {

    const text = this.renderer.createText('lets play!');
    // this.renderer.appendChild(this.elementRef.nativeElement, text);

    const tag = this.renderer.createElement('h6');
    this.renderer.appendChild(tag, text);
    this.renderer.appendChild(this.elementRef.nativeElement, tag);

    this.renderer.addClass(this.elementRef.nativeElement, 'ball');

  }


}
