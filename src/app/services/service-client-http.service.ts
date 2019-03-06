import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from './icliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceClientHttpService {

//end-point url
base_url: string = 'http://dummy.restapiexample.com/api/v1';

constructor(private http: HttpClient) { } //instanciando calse http

getAllEmployees(): Observable<ICliente[]> {
    console.log('getting all employees');
    // return this.http.get<ICliente[]>( this.base_url + '/employees');
    return this.http.get<ICliente[]>(`${this.base_url}/employees`);
}

getEmployee(id: string): Observable<ICliente> {
    return this.http.get<ICliente>(`${this.base_url}/employee/${id}`);
}

addEmployee(newEmployee: any): Observable<any> {
  return this.http.post<any>(`${this.base_url}/create`, newEmployee, {
      headers: {
          'Content-Type': 'application/json'
      }
  });
}

updateEmployee(updateEmployee: any): Observable<any> {
    return this.http.put<any>(`${this.base_url}/update/${updateEmployee.id}`,
    updateEmployee, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

deleteEmployee(id: string): Observable<any> {
    return this.http.delete<ICliente>(`${this.base_url}/delete/${id}`);
}


}
