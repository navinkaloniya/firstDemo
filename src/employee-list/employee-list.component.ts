import{Component} from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IEmployee} from 'src/Model/Employee/employeeModel'
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { UserService } from 'src/Services/user/user.service';
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
    colour:string='';
    //Manually creating the instance for the user service
    //_userService1:UserService= new UserService();
    //Angular injector
    constructor(private _empService:EmployeeService,
        private _userService:UserService,
        private dialog:MatDialog,
        private _router:Router){
      
    }
    //Get the color from service
//  getcolour():string {
//    this.colour= this._userService.backcolor;
//  }
 //set the color of service property
 setcolour(value:any){
   // console.log(value.target.value);
this._userService.backcolor= value.target.value;
 }
    ngOnInit() {
        this.employees= this._empService.getEmployees();
        this.colour= this._userService.backcolor;
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
    {queryParams:{'deptcode':'1','name':'HR'}, queryParamsHandling:'merge'});
}
}

