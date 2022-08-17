import{Component} from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IEmployee} from 'src/Model/Employee/employeeModel'
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { EmployeeListDialogComponent } from './emloyee-list-dialog/employee-list-dialog';

@Component({
    selector:'emp-list',
    templateUrl:'./employee-list.component.html',
    // Register the Employee Service in this component by declaring
    // it in the providers array 
    //providers:[EmployeeService]
})
export class EmployeeListComponent{

    selectedRbValue:string="All";
    employees:IEmployee[]= [];

    constructor(private _empService:EmployeeService,
        private dialog:MatDialog,
        private _router:Router){
      
    }

    ngOnInit() {
        this.employees= this._empService.getEmployees();
       //console.log(this._empService.getName(this.employees[0].name));
    }
        
// employees:IEmployee[]= [
//     {code:'1',name:'TOM',gender:'male',salary:3000},
//     {code:'2',name:'Sara',gender:'female',salary:4000.656465},
//     {code:'3',name:'Nick',gender:'male',salary:8000.565515},
//     {code:'4',name:'Mary',gender:'female',salary:7000},
//     {code:'5',name:'Mark',gender:'male',salary:3000.256444}
// ];


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
openDialog(){
    this.dialog.open(EmployeeListDialogComponent);
}

navigate(emp:IEmployee){
   // alert(emp.code);
    //this._router.navigate(['employee']);

//this._router.navigate(['/employee',emp.code]); //Required route 
   // this._router.navigate(['/employee',{code:emp.code}]); //optional route 

    this._router.navigate(['/employee',emp.code],
    {queryParams:{'empcode':emp.code,'name':emp.name}, queryParamsHandling:'merge'});
}

preserveQuery(){
    this._router.navigate(['/dept'],
    {queryParams:{'deptcode':'1','name':'HR'}, queryParamsHandling:'preserve'});
}
}

