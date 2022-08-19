import { Component} from '@angular/core'
import { IEmployee } from 'src/Model/Employee/employeeModel';
import { EmployeeService } from 'src/Services/Employee/employee.service';

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  
  const ELEMENT_DATA: Element[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

@Component({
    selector:'',
    templateUrl:'./department.component.html',
    //providers:[EmployeeService]
})
export class DepartmentComponent{
// Column name should match with the property name
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource= ELEMENT_DATA;
    employees:IEmployee[]= [];

    constructor(private _empService:EmployeeService){
      
    }

    ngOnInit() {
        //this.employees= this._empService.getEmployees();
        //this.dataSource= this._empService.getEmployees();
    }
   
}

// User
// FirstName, MiddleName, LastName, 
// Addrerss1, Address2 , 
// Gender (Male - Female), Salary,Pincode,
// UserType ( Contractual, Permanent)
//Material Table 
// 10 records
// Use Service to get the data for User

//Add a Select for UserType
// Add select list for Gender
// Use Filter on table 