import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core'
import { catchError, Observable, of, ReplaySubject, Subject, throwError } from 'rxjs';
import { IEmployee } from 'src/Model/Employee/employeeModel';


//If we want to use the data accross multiple components and the logic then we 
// need to provide that information in the service and we can reuse it.
// It is used to inject the other service dependencies into the service.
// IN this case it does not have any dependency so the parameter list is empty
@Injectable()
export class EmployeeService {
    employeeURL:string='api/employees';
    employees:any;
    loggedIn$:any= new Subject(); 
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
       return this._http.get<IEmployee[]>(this.employeeURL)       
       .pipe(catchError(this.handleError));
    }

    createEmployeebyApi(emp:IEmployee){
        console.log(emp);
        this._http.post<IEmployee>(this.employeeURL,emp,
            {
                headers:new HttpHeaders({
                    'Content-Type':'application/json'
                })
            })
            .pipe(catchError(this.handleError));

    }
    updateEmployeebyApi(emp:IEmployee){
        //http://localhost:4200/employee/1
        console.log(emp);
        this._http.put<IEmployee>(`${this.employeeURL}/${emp.code}`,emp,
            {
                headers:new HttpHeaders({
                    'Content-Type':'application/json'
                })
            })
            .pipe(catchError(this.handleError));

    }
    DeleteEmployeebyApi(code:string){
        //http://localhost:4200/employee/1
        
        this._http.delete(`${this.employeeURL}/${code}`)
            .pipe(catchError(this.handleError));

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

    private handleError(errorResponse:HttpErrorResponse){
         console.log(errorResponse);
        // console.log(errorResponse.status);
        // console.log(errorResponse.url);
        if(errorResponse.error  instanceof ErrorEvent)
        {
            console.log(errorResponse.message);
            // Client side error
        }
        else
        {
            console.log(errorResponse.message);
            // server side
        }
        //return new ErrorObservable('')
      return throwError(()=>{
        return 'Something wrong occur!!';
      });
      

    }
}

//Employee          - Get the list of all employee 
//Employee/update/1 - They will update the data for the record having an id of 1.
                      // The data that you want to update sent it into the body
                      // {FirstName:'',LastName:'',Gender:''}
//Employee/delete/1 - They will delete the record with id 1
//Employee/Create   - Sent the data to us into the body and we will create the record into the DB

//Post- It will always create an entity into the Database
// Url- {code:'',FirstName:''}

//Put - It will create an entity into the Database and if matched it will update the entity
// Url- {code:'',FirstName:''}