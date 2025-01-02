import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeesParams } from '../models/employees-params';
import { EmployeesResponse } from '../models/employees-response';
import { delay, filter, Observable, of } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeResponse } from '../models/employee-response';

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
  {
    id: 'www4321',
    name: 'Jane Doe',
    department: 'R&D',
    email: 'another.email@wp.pl',
    status: 'ONBOARDED',
    equipments: [
      {
        id: 'bbb123456',
        name: 'Macbook Air Pro',
      },
    ],
  },
];

const EMPLOYEES_RESPONSE = <EmployeesResponse>{
  employees: EMPLOYEES,
  total: 2,
};

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  public getEmployees(params: EmployeesParams): Observable<EmployeesResponse> {
    return of(EMPLOYEES_RESPONSE);
  }

  public getEmployee(id: string): Observable<EmployeeResponse> {
    const employee = EMPLOYEES.find((emp) => emp.id === id);
    return of(<EmployeeResponse>{ employee });
  }
}
