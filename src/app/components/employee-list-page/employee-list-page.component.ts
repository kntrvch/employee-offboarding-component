import { Component } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeeListComponent],
  templateUrl: './employee-list-page.component.html',
  styleUrl: './employee-list-page.component.scss'
})
export class EmployeeListPageComponent {

}
