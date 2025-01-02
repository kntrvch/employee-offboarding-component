import { createReducer, on } from '@ngrx/store';
import { employeeAdapter, initialEmployeeState } from './employees.state';
import * as employee from './employees.actions';

export const employeesReducer = createReducer(
  initialEmployeeState,
  on(employee.loadingEmployees, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(employee.loadEmployeesSuccess, (state, { response }) =>
    employeeAdapter.setAll(response.employees, {
      ...state,
      error: false,
      loading: false,
      total: response.total,
    })
  ),
  on(employee.loadEmployeesFailure, (state) =>
    employeeAdapter.removeAll({
      ...state,
      error: true,
      loading: false,
      total: 0,
    })
  ),
  on(employee.loadingEmployee, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(employee.loadEmployeeSuccess, (state, { response }) => ({
    ...state,
    error: false,
    loading: false,
    selectedEmployeeId: response.employee.id
  }))
);
