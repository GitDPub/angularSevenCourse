import { Component, OnInit } from '@angular/core';
import { ServiceClientHttpService } from '../services/service-client-http.service';
import { ICliente } from '../services/icliente';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  clientes: ICliente[];
  idEmployee: number;
  body = '{"name":"test1", "salary":"1123", "age":"23", "id": "4950"}';

  constructor(
    private request: ServiceClientHttpService,
  ) { }

  ngOnInit() {
    this.getAll();
    this.getOne('4900');
  }

  getAll() {
    this.request.getAllEmployees()
      .subscribe(
        (data: ICliente[]) =>  { this.clientes = data; }, // Funcion callback que devuelve datos cuando la peticion es exitosa.
        (error: any)   => console.log('error on getAll:  ', error), // Funcion callback que devuelve error cuando la peticion falla.
        () => console.log('* getAll done') // Funcion callback sin ningun parametro y devuelve nada despues de terminar la peticion.
      );
  }

  getOne(id): void {
    this.request.getEmployee(id)
        .subscribe(
            (res: ICliente) => {
                console.log('One employee gotten: ', JSON.stringify(res, null, 2));
            },
            (error: any) => console.log('error on get one: ', error),
            () => console.log('* getOne completed')
        );
  }

  addEmployee() {
    const employeeData: any = {name: 'test', salary: '123', age: '23'};
    this.request.addEmployee(employeeData)
        .subscribe(
            response => { console.log('* Response of the employee added: ', JSON.stringify(response, null, 2)); },
            error => console.log(error),
            () => console.log('* add completed')
        );
  }

  deleteEmployee(id: number) {
    this.request.deleteEmployee('' + id)
        .subscribe(
            (res: any) => {
                console.log('# Deleted employee: ', JSON.stringify(res, null, 2));
            },
            (error: any) => console.log(error)
        );
  }

  updateEmployee(body: string) {
    const values = JSON.parse(body);
    this.request.updateEmployee(values)
        .subscribe(
            (res: any) => {
                console.log('# updated: ', res);
            },
            (error: any) => console.log(error),
            () => console.log('* update completed ')
        );
  }

}
