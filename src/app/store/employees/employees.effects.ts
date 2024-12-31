import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeeService } from '../../services/employee.service';
import { inject, Injectable } from '@angular/core';
import {
  loadEmployeesFailure,
  loadEmployeesSuccess,
  loadingEmployees,
} from './employees.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeesResponse } from '../../models/employees-response';
import { EmployeesParams } from '../../models/employees-params';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EmployeesEffects {
  private actions$ = inject(Actions);
  
  constructor(
    private employeeService: EmployeeService
  ) {}

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
}
