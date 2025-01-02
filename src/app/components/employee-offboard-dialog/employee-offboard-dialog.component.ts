import { Component, inject } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { OffboardParams } from '../../models/offboard-params';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-offboard-dialog',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatDialogTitle,
    MatButtonModule,
  ],
  templateUrl: './employee-offboard-dialog.component.html',
  styleUrl: './employee-offboard-dialog.component.scss',
})
export class EmployeeOffboardDialogComponent {
  readonly dialog = inject(MatDialog);
  readonly dialogRef = inject(MatDialogRef<EmployeeOffboardDialogComponent>);

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      address: this.fb.group({
        streetLine1: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        receiver: ['', Validators.required],
      }),
      notes: [''],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get addressGroup(): FormGroup {
    return this.formGroup.get('address') as FormGroup;
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
  }
}
