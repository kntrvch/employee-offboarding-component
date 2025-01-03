import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { loadingEmployee } from '../../store/employees/employees.actions';
import { Employee } from '../../models/employee';
import { Observable } from 'rxjs';
import { selectEmployee } from '../../store/employees/employees.selectors';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {
  DialogData,
  EmployeeOffboardDialogComponent,
} from '../employee-offboard-dialog/employee-offboard-dialog.component';

@Component({
  selector: 'app-employee-details-page',
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './employee-details-page.component.html',
  styleUrl: './employee-details-page.component.scss',
})
export class EmployeeDetailsPageComponent {
  private id: string;
  readonly dialog = inject(MatDialog);

  employee$: Observable<Employee | null> | undefined;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.store.dispatch(loadingEmployee({ id: this.id }));
  }

  ngOnInit() {
    this.employee$ = this.store.pipe(select(selectEmployee(this.id)));
  }

  openOffboardDialog() {
    const dialogRef = this.dialog.open(EmployeeOffboardDialogComponent, {
      width: '600px',
      data: <DialogData>{
        employeeId: this.id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }
}
