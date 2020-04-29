import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/models/employee-model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeId : string
  
  employees : Employee[]

  errorMessage : String

  expression : RegExp = new RegExp('[0-9]+')

  constructor(
    private employeeService : EmployeeService
  ) { }

  ngOnInit(): void {
  }

  getEmployee() {
    this.errorMessage = null
    if(this.employeeId) {
      if(!this.expression.test(this.employeeId)) {
        this.errorMessage = 'Only numbers are allowed'
        return
      }
      this.employeeService.getEmployee(this.employeeId).subscribe(
        (response: Employee) => {
          this.employees = [response]
        },
        error => this.errorMessage = error.error.message
      )
      return
    }
    this.getEmployees()
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response
      },
      error => this.errorMessage = error.error.message
    )
  }

}
