import { Component, Input, SimpleChanges,OnChanges } from '@angular/core'
import { NgForm } from '@angular/forms';
import { Country} from 'src/Model/Employee/employeeModel'

@Component({
   selector:'temp-form',   
   templateUrl:'./templateform.component.html'
})
export class TemplateFormComponent  {
    fullname:string="";
    emailId:string="";
    savePerson(form:NgForm){
     console.log(form.controls);
     console.log(form.value);
    }
    countries:Country[]=[
        {Text:"US",viewValue:"1"},
        {Text:"UK",viewValue:"2"},
        {Text:"India",viewValue:"3"},
        {Text:"Canada",viewValue:"4"}

    ];
}