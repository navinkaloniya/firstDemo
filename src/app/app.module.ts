import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from 'src/employee/employee.component';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from 'src/employee-list/employee-list.component';
import { EmployeeCountComponent } from 'src/employeeCount/employeeCount.component';
import { EmployeeTitlePipe } from 'src/employee-list/employeeTitle.pipe';
import { SimpleChangesComponent } from 'src/simpleChanges/simplechanges.component';
import { DirectiveComponent } from 'src/CustomDirective/directive.component';
import { HighLightDirective } from 'src/CustomDirective/hightlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentProjectComponent } from 'src/contentproject/contentproject.component';
import { TemplateFormComponent } from 'src/templateForm/templateForm.component';

import { ModelapproachComponent } from './modelapproach/modelapproach.component';
import { SelectValidator } from 'src/shared/Directive/select.validator';
import { PersonModuleModule } from './person-module/person-module.module';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from 'src/department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { MaterialModule } from './material.module';
import { UserService } from 'src/Services/user/user.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmpDataService } from 'src/Services/Employee/emp-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveDemoComponent } from './Reactive-Form-Approach/reactive-form-demo.component';
import { ReactiveDynamicComponent } from './dynamic-Reactive-Form/dynamic.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,EmployeeComponent, EmployeeListComponent,EmployeeCountComponent,
    EmployeeTitlePipe,SimpleChangesComponent,
  DirectiveComponent,  HighLightDirective,DepartmentComponent,
  ContentProjectComponent,TemplateFormComponent, ModelapproachComponent,
  SelectValidator,
  PageNotFoundComponent,ReactiveDemoComponent,ReactiveDynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    PersonModuleModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
MatMenuModule,
MatIconModule,
    HttpClientInMemoryWebApiModule.forRoot(EmpDataService)
    //RouterModule.forRoot(routes)
  ],
  providers: [EmployeeService,UserService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

// Root Module of the angular application
// Features Modules