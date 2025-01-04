import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadingEmployees } from '../../store/employees/employees.actions';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { merge, Subscription, tap } from 'rxjs';
import {
  selectAllEmployees,
  selectEmployeesLoading,
  selectEmployeesTotal,
} from '../../store/employees/employees.selectors';
import { Employee } from '../../models/employee';
import { EmployeesParams } from '../../models/employees-params';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [
    CommonModule,
    RouterModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent implements OnDestroy, AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  private subscription: Subscription = new Subscription();

  dataSource = new MatTableDataSource<Employee>();
  loading: boolean | undefined;
  total: number | undefined;
  displayedColumns: string[] = [
    'name',
    'email',
    'department',
    'equipment',
    'status',
  ];

  constructor(private store: Store, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.subscription.add(
      this.store.pipe(select(selectAllEmployees)).subscribe((employees) => {
        this.initializeData(employees);
      })
    );

    this.subscription.add(
      this.store.pipe(select(selectEmployeesTotal)).subscribe((total) => {
        this.total = total;
      })
    );

    this.subscription.add(
      this.store.pipe(select(selectEmployeesLoading)).subscribe((loading) => {
        this.loading = loading;
      })
    );

    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
      this.subscription.add(
        merge(this.paginator.page)
          .pipe(
            tap(() => {
              this.loadEmployees({
                pageNumber: this.paginator!.pageIndex + 1,
                pageSize: this.paginator!.pageSize,
              });
            })
          )
          .subscribe()
      );
    }

    this.cdr.detectChanges();
  }

  private initializeData(employees: Employee[]) {
    this.dataSource.data = employees;
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
      this.cdr.detectChanges();
    }
  }

  private loadEmployees(params: EmployeesParams) {
    this.store.dispatch(loadingEmployees({ params }));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
