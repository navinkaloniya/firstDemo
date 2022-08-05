import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from 'src/employee/employee.component';
import{ FormsModule } from '@angular/forms'

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

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { ModelapproachComponent } from './modelapproach/modelapproach.component';
import { SelectValidator } from 'src/shared/Directive/select.validator';
import { PersonModuleModule } from './person-module/person-module.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,EmployeeComponent, EmployeeListComponent,EmployeeCountComponent,
    EmployeeTitlePipe,SimpleChangesComponent,
  DirectiveComponent,  HighLightDirective,
  ContentProjectComponent,TemplateFormComponent, ModelapproachComponent,
  SelectValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    PersonModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

// Root Module of the angular application
// Features Modules