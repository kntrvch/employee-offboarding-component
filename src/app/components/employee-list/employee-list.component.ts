import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadingEmployees } from '../../store/employees/employees.actions';
@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  constructor(private store: Store) {}

  ngOnInit() {
    this.loadEmployees();
  }

  private loadEmployees() {
    this.store.dispatch(loadingEmployees({ params: {} }));
  }
}
