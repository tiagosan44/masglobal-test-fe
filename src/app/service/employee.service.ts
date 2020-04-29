import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private httpClient : HttpClient) { }

  getEmployees() {
    return this.httpClient.get<Employee[]>(`${environment.apiConstants.API_DOMAIN}/employees`)
  }

  getEmployee(employeeId: string) {
    return this.httpClient.get<Employee>(`${environment.apiConstants.API_DOMAIN}/employees/${employeeId}`)
  }
}
