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

constructor(private http: HttpClient) { } //instantiate our http class

//method to get all the employees as you can see it return an observable
getAllEmployees(): Observable<ICliente[]>{
    console.log('getting all employees');
    // return this.http.get<ICliente[]>( this.base_url + '/employees');
    return this.http.get<ICliente[]>(`${this.base_url}/employees`);
}

//method to get one todo. returning an observable too
getEmployee(id: string): Observable<ICliente>{
    return this.http.get<ICliente>(`${this.base_url}/employee/${id}`);
}

//method to create a todo. return an observable too
// addEmployee(newEmployee: ICliente): Observable<ICliente>{
//     return this.http.post<ICliente>(`${this.base_url}/create`, newEmployee, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
// }

addEmployee(newEmployee: any): Observable<ICliente>{
  return this.http.post<any>(`${this.base_url}/create`, newEmployee, {
      headers: {
          'Content-Type': 'application/json'
      }
  });
}

// {name:"test1", salary:"1123", "age":"23", id: "719"}

//method to update a todo. return an observable too
updateEmployee(updateEmployee: ICliente): Observable<ICliente>{
    console.log('++++----- ', updateEmployee);
    return this.http.put<any>(`${this.base_url}/update/${updateEmployee.id}`,
    updateEmployee, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

//method to delete one todo. return an observable too
deleteEmployee(id: string): Observable<ICliente>{
    return this.http.delete<ICliente>(`${this.base_url}/delete/${id}`);
}


}
