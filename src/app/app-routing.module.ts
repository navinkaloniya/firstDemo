import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from 'src/department/department.component';
import { EmployeeListComponent } from 'src/employee-list/employee-list.component';
import { EmployeeComponent } from 'src/employee/employee.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes:Routes=[
  { path:'employee',component:EmployeeComponent},
  { path:'employee/:id',component:EmployeeComponent},
  { path:'employee/:emp-id/:name',component:EmployeeComponent},
  { path:'employee-list',component:EmployeeListComponent},
  { path:'dept',component:DepartmentComponent},
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
