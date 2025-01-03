import { Routes } from '@angular/router';
import { EmployeeListPageComponent } from './components/employee-list-page/employee-list-page.component';
import { EmployeeDetailsPageComponent } from './components/employee-details-page/employee-details-page.component';

export const routes: Routes = [
  { path: 'employee-list', component: EmployeeListPageComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsPageComponent },
  { path: '', redirectTo: '/employee-list', pathMatch: 'full' },
];
