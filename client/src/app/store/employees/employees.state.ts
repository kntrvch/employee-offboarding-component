import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Employee } from '../../models/employee';

export interface EmployeesState extends EntityState<Employee> {
  total: number;
  loading: boolean;
  error: any;
}

export const employeeAdapter: EntityAdapter<Employee> =
  createEntityAdapter<Employee>({
    selectId: (employee: Employee) => employee.id,
  });

export const initialEmployeeState: EmployeesState =
  employeeAdapter.getInitialState({
    total: 0,
    loading: false,
    error: null,
  });
