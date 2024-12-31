import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSearchInputComponent } from './employee-search-input.component';

describe('EmployeeSearchInputComponent', () => {
  let component: EmployeeSearchInputComponent;
  let fixture: ComponentFixture<EmployeeSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSearchInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
