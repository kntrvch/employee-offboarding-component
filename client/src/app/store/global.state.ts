import {
  EmployeesState,
  initialEmployeeState,
} from './employees/employees.state';

export interface GlobalState {
  employees: EmployeesState;
}

export const initialGlobalState: GlobalState = {
  employees: initialEmployeeState,
};
