import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './Delete/delete-user.component';
import { EditUserComponent } from './Edit/edit-user.component';
import { UserComponent } from './user-list.component';

const routes:Routes=[
    {
        path:'',
        children:[
            {path:'',component:UserComponent},
            {path:'edit/:id',component:EditUserComponent},
            {path:'delete/:id',component:DeleteUserComponent}
        ]
    },
    
            // {path:'',component:UserComponent},
            // {path:'edit/:id',component:EditUserComponent},
            // {path:'delete/:id',component:DeleteUserComponent}

//   {path:'user',component:UserComponent},
//   {path:'user/edit/:id',component:EditUserComponent},
//   {path:'user/delete/:id',component:DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
