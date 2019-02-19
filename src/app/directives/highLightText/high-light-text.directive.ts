import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLightText]'
})
export class HighLightTextDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) { }

  @Input() defaultColor: string;

  @Input('appHighLightText') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setHighLight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHighLight(null);
  }

  private setHighLight(color: string) {
    // this.elementRef.nativeElement.style.backgroundColor = color;
    // this.elementRef.nativeElement.style.color = 'gray';

    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color);

    const text = this.renderer.createText('Hello world!');
    this.renderer.appendChild(this.elementRef.nativeElement, text);

    // const div = this.renderer.createElement('div');
    // this.renderer.appendChild(div, text);
    // this.renderer.appendChild(this.elementRef.nativeElement, div);



  }

}
