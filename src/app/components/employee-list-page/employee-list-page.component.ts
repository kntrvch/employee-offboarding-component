import { Component } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeSearchInputComponent } from '../employee-search-input/employee-search-input.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-employee-list-page',
  imports: [
    EmployeeSearchInputComponent,
    EmployeeListComponent,
    MatCardModule,
    MatTabsModule,
  ],
  templateUrl: './employee-list-page.component.html',
  styleUrl: './employee-list-page.component.scss',
})
export class EmployeeListPageComponent {}
