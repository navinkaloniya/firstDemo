import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { IEmployee } from "src/Model/Employee/employeeModel";
import { EmployeeService } from "./employee.service";

@Injectable()
export class EmployeeListResolverService
implements Resolve<IEmployee[]>{

    constructor(private _empService:EmployeeService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmployee[]> {
        
        return this._empService.getEmployeeByApi();
    }

}