import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeeService } from '../../services/employee.service';
import { inject, Injectable } from '@angular/core';
import {
  loadEmployeeFailure,
  loadEmployeesFailure,
  loadEmployeesSuccess,
  loadEmployeeSuccess,
  loadingEmployee,
  loadingEmployees,
} from './employees.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeesResponse } from '../../models/employees-response';
import { EmployeesParams } from '../../models/employees-params';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../../models/employee';

@Injectable()
export class EmployeesEffects {
  private actions$ = inject(Actions);

  constructor(private employeeService: EmployeeService) {}

  public loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadingEmployees),
      switchMap((payload: { params: EmployeesParams }) =>
        this.employeeService.getEmployees(payload.params).pipe(
          map((response: EmployeesResponse) =>
            loadEmployeesSuccess({ response })
          ),
          catchError((error: HttpErrorResponse) =>
            of(loadEmployeesFailure({ error }))
          )
        )
      )
    )
  );

  public loadEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadingEmployee),
      switchMap((payload: { id: string }) =>
        this.employeeService.getEmployee(payload.id).pipe(
          map((response: Employee) =>
            loadEmployeeSuccess({ response })
          ),
          catchError((error: HttpErrorResponse) =>
            of(loadEmployeeFailure({ error }))
          )
        )
      )
    )
  );
}
