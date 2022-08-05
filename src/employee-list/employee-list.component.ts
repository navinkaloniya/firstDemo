import{Component} from '@angular/core'
import { IEmployee} from 'src/Model/Employee/employeeModel'

@Component({
    selector:'emp-list',
    templateUrl:'./employee-list.component.html'
})
export class EmployeeListComponent{

    selectedRbValue:string="All";

employees:IEmployee[]= [
    {code:'1',name:'TOM',gender:'male',salary:3000},
    {code:'2',name:'Sara',gender:'female',salary:4000.656465},
    {code:'3',name:'Nick',gender:'male',salary:8000.565515},
    {code:'4',name:'Mary',gender:'female',salary:7000},
    {code:'5',name:'Mark',gender:'male',salary:3000.256444}
];
getTotalEmployeeCount():number{
    return this.employees.length;
}
getFemaleEmployeeCount():number {
    return this.employees.filter(e=>e.gender==="female").length;
}

getMaleEmployeeCount():number {
   let data:IEmployee[]= this.employees.filter(e=>e.gender==="male");
    return data.length;
}

gettingtheSelectedRadioButtonValue(value:string){
    console.log("Parent ="+value);
    this.selectedRbValue=value;
}
nos:number[]=[1,2,3,4];
   
}

