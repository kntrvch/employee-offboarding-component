import { Employee } from './employee';

export interface EmployeesResponse {
  employees: Employee[];
  total: number;
}
