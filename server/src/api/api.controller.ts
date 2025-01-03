import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Employee } from './models/employee';
import { EmployeesResponse } from './models/employees-response';
import { delay, of } from 'rxjs';
import { OffboardParams } from './models/offboard-params';

const EMPLOYEES = <Employee[]>[
  {
    id: 'vvv1323',
    name: 'John Doe',
    department: 'Engineering',
    email: 'some.email@wp.pl',
    status: 'OFFBOARDED',
    equipments: [
      {
        id: 'aaa123456',
        name: 'Macbook air',
      },
      {
        id: 'aaa123456',
        name: 'Magic Mouse',
      },
    ],
  },
  {
    id: 'www4321',
    name: 'Jane Doe',
    department: 'R&D',
    email: 'another.email@wp.pl',
    status: 'ONBOARDED',
    equipments: [
      {
        id: 'bbb123456',
        name: 'Macbook Air Pro',
      },
    ],
  },
];

const EMPLOYEES_RESPONSE = <EmployeesResponse>{
  employees: EMPLOYEES,
  total: 2,
};

@Controller('api')
export class ApiController {
  @Get('employees')
  getEmployees() {
    return of(EMPLOYEES_RESPONSE);
  }

  @Get('employees/:id')
  getEmployee(@Param('id') id: string) {
    const employee = EMPLOYEES.find((emp) => emp.id === id);
    return of({employee});
  }

  @Post('users/:id/offboard')
  offboardEmployee(@Param('id') id: string, @Body() body: OffboardParams): any {
    return {
      status: 200,
      message: `User offboarded (ID: ${id})`,
      data: body,
    };
  }
}
