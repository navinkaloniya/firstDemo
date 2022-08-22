import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person-module.component';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  //providers:[EmployeeService],
  exports:[PersonComponent] 
})
export class PersonModuleModule { }
