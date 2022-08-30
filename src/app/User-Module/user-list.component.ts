import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IEmployee } from 'src/Model/Employee/employeeModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { UserService } from 'src/Services/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserComponent implements OnInit {

  employees:IEmployee[]= [];
  
  constructor(private _empService:EmployeeService,
      private _userService:UserService,
      private dialog:MatDialog,
      private _router:Router){
    
  }
  
  ngOnInit() {
      // To get the data from observable 
      this._empService.getEmployeeByApi().subscribe((empdata)=>{
          this.employees= empdata;
      })
  }
 
openDialog(){
  
}

navigate(emp:IEmployee,operation:string){
if(operation=='edit'){
  this._router.navigate(['/user/edit',emp.code],
  {queryParams:{'empcode':emp.code,'name':emp.name}, queryParamsHandling:'merge'});
}
else if (operation=='delete')
{
  this._router.navigate(['/user/delete',emp.code],
  {queryParams:{'empcode':emp.code,'name':emp.name}, queryParamsHandling:'merge'});
}
else{
  
}
  
}


}