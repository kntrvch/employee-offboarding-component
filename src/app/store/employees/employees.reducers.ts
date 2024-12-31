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
  //   on(loadEmployeesSuccess, (state, { response }) => ({
  //     ...state,
  //     loading: false,
  //     employees: response.employees,
  //     total: response.total,
  //     error: null,
  //   })),
  on(employee.loadEmployeesSuccess, (state, { response }) =>
    employeeAdapter.setAll(response.employees, {
      ...state,
      error: false,
      loading: false,
      total: response.total,
    })
  ),
  //   on(loadEmployeesFailure, (state, { error }) => ({
  //     ...state,
  //     loading: false,
  //     error,
  //   }))
  on(employee.loadEmployeesFailure, (state) =>
    employeeAdapter.removeAll({
      ...state,
      error: true,
      loading: false,
      total: 0,
    })
  )
);
