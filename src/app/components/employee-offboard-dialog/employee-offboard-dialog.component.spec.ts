import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOffboardDialogComponent } from './employee-offboard-dialog.component';

describe('EmployeeOffboardDialogComponent', () => {
  let component: EmployeeOffboardDialogComponent;
  let fixture: ComponentFixture<EmployeeOffboardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeOffboardDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeOffboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
