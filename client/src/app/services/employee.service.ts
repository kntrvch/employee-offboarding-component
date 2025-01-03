import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeesParams } from '../models/employees-params';
import { EmployeesResponse } from '../models/employees-response';
import { catchError, Observable, throwError } from 'rxjs';
import { EmployeeResponse } from '../models/employee-response';
import { OffboardParams } from '../models/offboard-params';

const API_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(params: EmployeesParams): Observable<EmployeesResponse> {
    return this.http
      .get<EmployeesResponse>(`${API_URL}/employees`)
      .pipe(catchError(this.handleError));
  }

  getEmployee(id: string): Observable<EmployeeResponse> {
    return this.http
      .get<EmployeeResponse>(`${API_URL}/employees/${id}`)
      .pipe(catchError(this.handleError));
  }

  offboardEmployee(id: string, params: OffboardParams): Observable<any> {
    return this.http
      .post<any>(`${API_URL}/users/${id}/offboard`, params)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
