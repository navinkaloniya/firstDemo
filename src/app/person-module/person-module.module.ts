import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person-module.component';
import { EmployeeService } from 'src/Services/Employee/employee.service';

@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule
  ],
  //providers:[EmployeeService],
  exports:[PersonComponent] 
})
export class PersonModuleModule { }
