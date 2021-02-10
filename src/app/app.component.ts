import { Component, OnInit } from '@angular/core';
import { IEmployee } from './interfaces/employee';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngx-pagination-demo';

  p: number = 1;
  collection: IEmployee[] = [];

  constructor(private emp: EmployeeService) {
  }

  ngOnInit(): void {
    this.collection = this.emp.getEmployees()
  }

}
