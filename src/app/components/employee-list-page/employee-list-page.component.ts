import { Component } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeSearchInputComponent } from '../employee-search-input/employee-search-input.component';

@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeSearchInputComponent, EmployeeListComponent],
  templateUrl: './employee-list-page.component.html',
  styleUrl: './employee-list-page.component.scss'
})
export class EmployeeListPageComponent {

}
