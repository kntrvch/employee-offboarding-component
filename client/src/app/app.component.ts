import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadingEmployees } from './store/employees/employees.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'employee-offboarding-component';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      loadingEmployees({ params: { pageNumber: 1, pageSize: 10 } })
    );
  }
}
