import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeesParams } from '../models/employees-params';
import { EmployeesResponse } from '../models/employees-response';
import { delay, Observable, of } from 'rxjs';
import { Employee } from '../models/employee';

const EMPLOYEES = <Employee[]>[
  {
    id: 'vvv1323',
    name: 'John Doe',
    department: 'Engineering',
    email: 'some.email@wp.pl',
    status: 'OFFBOARDED',
    equipments: [
      {
        id: 'aaa123456',
        name: 'Macbook air',
      },
      {
        id: 'aaa123456',
        name: 'Magic Mouse',
      },
    ],
  },
];

const EMPLOYEES_RESPONSE = <EmployeesResponse>{
  employees: EMPLOYEES,
  total: 1,
};

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  public getEmployees(params: EmployeesParams): Observable<EmployeesResponse> {
    return of(EMPLOYEES_RESPONSE).pipe(delay(3000));
  }
}
