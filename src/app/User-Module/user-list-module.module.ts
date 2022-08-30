import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './Create/create-user.component';
import { DeleteUserComponent } from './Delete/delete-user.component';
import { EditUserComponent } from './Edit/edit-user.component';
import {  RouterModule } from '@angular/router';
import { UserComponent } from './user-list.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [CreateUserComponent,DeleteUserComponent,EditUserComponent,UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
  ],
  exports:[CreateUserComponent,DeleteUserComponent,EditUserComponent,UserComponent,RouterModule]
})
export class UserModule { }
