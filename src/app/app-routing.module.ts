import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from 'src/department/department.component';
import { EmployeeListComponent } from 'src/employee-list/employee-list.component';
import { EmployeeComponent } from 'src/employee/employee.component';
import { AppComponent } from './app.component';
import { ReactiveDynamicComponent } from './dynamic-Reactive-Form/dynamic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonComponent } from './person-module/person-module.component';
import { ReactiveDemoComponent } from './Reactive-Form-Approach/reactive-form-demo.component';

const routes:Routes=[
  //{ path:'employee',component:EmployeeComponent},
  //Required route parameter ( start with forward slash with a semi colon with it)
  { path:'employee/:id',component:EmployeeComponent},
  //{ path:'employee',component:EmployeeComponent},
  { path:'employee/:emp-id/:name',component:EmployeeComponent},
  { path:'employee-list',component:EmployeeListComponent},
  { path:'dept',component:DepartmentComponent},
  { path:'person',component:PersonComponent},
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'reactive-form',component:ReactiveDemoComponent},
  {path:'dynamic-form',component:ReactiveDynamicComponent},
  {path:'user',
  loadChildren:()=>import('./User-Module/user-list-module.module').then(x=>x.UserModule)
  },
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
