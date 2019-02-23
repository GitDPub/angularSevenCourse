import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'componente-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent {
  public title:string;

  @Input() dePadreAHijo: string;
  @Input('propiedad') propiedadRecibidaDeAfuera: string;

  @Output() deHijoAPadre = new EventEmitter();


  constructor(){
      this.title = "Componente Hijo";
  }

  // enviar(event){
  enviar(){
      this.deHijoAPadre.emit({curso: 'Taller Angular 7', comunidad: 'GDG La Paz'});
  }
}
