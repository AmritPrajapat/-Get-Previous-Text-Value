import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/Common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IEmployee } from './child/child';

@Injectable({
  providedIn: 'root',
})
export class EmpServiceService {
  private _url = 'https://jsonplaceholder.typicode.com/todos';
  employee: any[];

  constructor(private _http: HttpClient) {
    /*this.employee=
  [
    {"id" : 101, Name :"Amrit"},
    {"id" : 102, Name :"Bunty"},
    {"id" : 103, Name :"Rohan"},
    {"id" : 104, Name :"Mohan"},
    {"id" : 105, Name :"Sohan"}
  ];*/
  }

  getEmployees(): Observable<IEmployee> {
    return this._http
      .get<IEmployee>('https://jsonplaceholder.typicode.com/todos');
      //.map((response: Response) => <IEmployee[]>response.json());
    //return this._http.get<IEmployee[]>(this._url);
  }

  getEmployeeList() {
    return this.employee;
  }

  getById(id: number): any {
    return this.employee.filter((s) => s.id == id);
  }
}
