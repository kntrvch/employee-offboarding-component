import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeesParams } from '../models/employees-params';
import { EmployeesResponse } from '../models/employees-response';
import { delay, filter, Observable, of } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeResponse } from '../models/employee-response';

const API_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public getEmployees(params: EmployeesParams): Observable<EmployeesResponse> {
    return this.http.get<EmployeesResponse>(`${API_URL}/employees`);
  }

  public getEmployee(id: string): Observable<EmployeeResponse> {
    return this.http.get<EmployeeResponse>(`${API_URL}/employees/${id}`);
  }
}
