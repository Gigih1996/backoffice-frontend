import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {

  group = [
    {id:'1', name: 'HRD'},
    {id:'1', name: 'IT Support'},
    {id:'1', name: 'Infokom'},
    {id:'1', name: 'Web Application'},
    {id:'1', name: 'Mobile Application'},
    {id:'1', name: 'Network Engineer'},
    {id:'1', name: 'DevOps'},
    {id:'1', name: 'Cyber Security'},
    {id:'1', name: 'Finance'},
    {id:'1', name: 'Datawarehouse'},
  ]

  statusEmployee = [
    {id:'1', name: 'Active'},
    {id:'2', name: 'Inactive'},
  ]

}
