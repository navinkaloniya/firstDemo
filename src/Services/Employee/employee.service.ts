import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core'
import { Observable, of, ReplaySubject } from 'rxjs';
import { IEmployee } from 'src/Model/Employee/employeeModel'

//If we want to use the data accross multiple components and the logic then we 
// need to provide that information in the service and we can reuse it.
// It is used to inject the other service dependencies into the service.
// IN this case it does not have any dependency so the parameter list is empty
@Injectable()
export class EmployeeService {
    employeeURL:string='api/employees';
    employees:any;
    constructor(private _http:HttpClient){

    }
    // This is the data that we want to use accross multiple components.
    //  private employees:IEmployee[]= [
    //     {code:'1',name:'TOM',gender:'male',salary:3000},
    //     {code:'2',name:'Sara',gender:'female',salary:4000.656465},
    //     {code:'3',name:'Nick',gender:'male',salary:8000.565515},
    //     {code:'4',name:'Mary',gender:'female',salary:7000},
    //     {code:'5',name:'Mark',gender:'male',salary:3000.256444}
    // ];

    getEmployeeByApi():Observable<IEmployee[]>{
       return this._http.get<IEmployee[]>(this.employeeURL);
    }

    // getEmployees():IEmployee[] {
    //     return this.employees;
    // }

    getName(name:string):string{
        return "Mr. "+name;
    }
    getempbyid(id:string) {
    let subject= new ReplaySubject();
     this._http.get<IEmployee[]>(this.employeeURL).subscribe((data)=>{
     this.employees= data.find(x=>x.code==id);
   subject.next(this.employees);
   subject.complete();
    });
return subject;
    }
}