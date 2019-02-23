import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componente-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})

export class PadreComponent {
  public title:string;
  public clase = {
      id:1,
      curso:'Angular',
      version: 'Siete'
  };

  constructor(){
      this.title = "Dentro del Componente Padre";
  }

  public datosDelHijo;
  recibirDatos(event){
      // console.log(event.nombre);
      console.log(event);
      this.datosDelHijo = event;
  }
}
