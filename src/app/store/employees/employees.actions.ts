import { createAction, props } from '@ngrx/store';
import { EmployeesResponse } from '../../models/employees-response';
import { EmployeesParams } from '../../models/employees-params';
import { EmployeeResponse } from '../../models/employee-response';
import { Update } from '@ngrx/entity';
import { Employee } from '../../models/employee';

enum EmployeesActionType {
  LoadingEmployees = '[EMPLOYEES] Loading Employees',
  LoadEmployeesSuccess = '[EMPLOYEES] Employees Loaded Success',
  loadEmployeesFailure = '[EMPLOYEES] Employees Loaded Failure',

  LoadingEmployee = '[EMPLOYEES] Loading Employee',
  LoadEmployeeSuccess = '[EMPLOYEES] Employee Loaded Success',
  loadEmployeeFailure = '[EMPLOYEES] Employee Loaded Failure',

  UpdateEmployee = '[EMPLOYEES] Update Employee',
}

export const loadingEmployees = createAction(
  EmployeesActionType.LoadingEmployees,
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

export const loadingEmployee = createAction(
  EmployeesActionType.LoadingEmployee,
  props<{ id: string }>()
);

export const loadEmployeeSuccess = createAction(
  EmployeesActionType.LoadEmployeeSuccess,
  props<{ response: EmployeeResponse }>()
);

export const loadEmployeeFailure = createAction(
  EmployeesActionType.loadEmployeeFailure,
  props<{ error: any }>()
);

export const updateEmployee = createAction(
  EmployeesActionType.UpdateEmployee,
  props<{ update: Update<Employee> }>()
);
