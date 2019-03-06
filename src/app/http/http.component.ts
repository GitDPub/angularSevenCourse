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
  body: any;

  constructor(
    private request: ServiceClientHttpService,
  ) { }

  ngOnInit() {
    this.getAll();
    this.getOne('4851');
  }

  getAll() {
    this.request.getAllEmployees()
      .subscribe(
        (data: ICliente[]) =>  { //start of (1)
          this.clientes = data;
        }, //end of (1)
        (error: any)   => console.log('error on getAll:  ', error), //(2) second argument
        ()             => console.log('* getAll done') //(3) second argument
      );
  }

  // (1) A callback function that returns the data on success request
  // (2) A callback function that returns the error on failed request
  // (3) And the complete callback function that takes no parameter and returns nothing after the request finished executing.

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
            (data: any) => {
                console.log('* Response of the employee added: ', JSON.stringify(data, null, 2));
            }, // (1)
            (error: any) => console.log(error), //(2)
            () => console.log('* add completed') //(3)
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

  updateEmployee(body: any) {
    this.request.updateEmployee(body)
        .subscribe(
            (res: any) => {
                console.log('# updated: ', res);
            },
            (error: any) => console.log(error),
            () => console.log('* update completed ')
        );
  }

}
