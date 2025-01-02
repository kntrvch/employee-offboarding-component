import { createFeatureSelector, createSelector } from '@ngrx/store';
import { employeeAdapter, EmployeesState } from './employees.state';

export const {
  selectIds: _selectEmployeesDataIds,
  selectEntities: _selectEmployeesEntities,
  selectAll: _selectAllEmployees,
  selectTotal: _selectEmployeesTotal,
} = employeeAdapter.getSelectors();

export const selectEmployeesState =
  createFeatureSelector<EmployeesState>('employees');

export const selectEmployeesIds = createSelector(
  selectEmployeesState,
  _selectEmployeesDataIds
);

export const selectEmployeesEntities = createSelector(
  selectEmployeesState,
  _selectEmployeesEntities
);

export const selectAllEmployees = createSelector(
  selectEmployeesState,
  _selectAllEmployees
);

export const selectEmployeesError = createSelector(
  selectEmployeesState,
  (state: EmployeesState): boolean => state.error
);

export const selectEmployeesLoading = createSelector(
  selectEmployeesState,
  (state: EmployeesState): boolean => state.loading
);

export const selectEmployeesTotal = createSelector(
  selectEmployeesState,
  (state: EmployeesState): number => state.total
);

export const selectEmployee = (id: string) =>
  createSelector(selectEmployeesEntities, (entities) => entities[id] || null);
