import { createAction, props } from '@ngrx/store';
import { EmployeesResponse } from '../../models/employees-response';
import { EmployeesParams } from '../../models/employees-params';

enum EmployeesActionType {
  Loading = '[EMPLOYEES] Loading',
  LoadEmployeesSuccess = '[EMPLOYEES] Loaded Success',
  loadEmployeesFailure = '[EMPLOYEES] Loaded Failure',
}

export const loadingEmployees = createAction(
  EmployeesActionType.Loading,
  props<{ params: EmployeesParams }>()
);

export const loadEmployeesSuccess = createAction(
  EmployeesActionType.LoadEmployeesSuccess,
  props<{ response: EmployeesResponse }>()
);

export const loadEmployeesFailure = createAction(
  EmployeesActionType.loadEmployeesFailure,
  props<{ error: any }>()
);
