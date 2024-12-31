import { Routes } from '@angular/router';
import { EmployeeListPageComponent } from './components/employee-list-page/employee-list-page.component';

export const routes: Routes = [
  { path: 'employee-list', component: EmployeeListPageComponent },
  { path: '', redirectTo: '/employee-list', pathMatch: 'full' },
];
