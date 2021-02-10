import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: IEmployee[] = [];

  constructor() {
    for (let i = 1; i <= 100; i++) {
      let Obj = { 'name': `Employee Name ${i}`, 'code': `EMP00 ${i}` }
      this.employees.push(Obj);
    }
  }
  getEmployees(): IEmployee[] {
    return this.employees
  }
}
