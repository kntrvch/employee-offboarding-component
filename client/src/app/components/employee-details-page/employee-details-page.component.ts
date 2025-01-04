import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateEmployee } from '../../store/employees/employees.actions';
import { Employee } from '../../models/employee';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {
  DialogData,
  EmployeeOffboardDialogComponent,
} from '../employee-offboard-dialog/employee-offboard-dialog.component';
import { EmployeeService } from '../../services/employee.service';
import { Update } from '@ngrx/entity';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsPageComponent {
  private id: string;
  readonly dialog = inject(MatDialog);

  employee$: Observable<Employee | null> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private employeeService: EmployeeService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.employee$ = this.employeeService.getEmployee(this.id);
  }

  openOffboardDialog() {
    const dialogRef = this.dialog.open(EmployeeOffboardDialogComponent, {
      width: '600px',
      data: <DialogData>{
        employeeId: this.id,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined && result.id === this.id) {
        this.updateEmployee();
      }
    });
  }

  updateEmployee() {
    const update: Update<Employee> = {
      id: this.id,
      changes: { status: 'OFFBOARDED' },
    };

    this.store.dispatch(updateEmployee({ update }));
  }
}
