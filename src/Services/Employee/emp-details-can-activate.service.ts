import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { EmployeeService } from "./employee.service";

@Injectable()
export class EmployeeDetailsCanActivateGuardService
implements CanActivate{

    constructor(private _empService:EmployeeService, private _router:Router)
    {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
       const id= route.paramMap.get('id');
      // console.log(id);
        const employeeExists= this._empService.getempbyid(id as string).subscribe(data=>{
            if(data){
              //  console.log("true");
              return true;
            }
            else
            {
                this._router.navigate(['/notfound']);
                return false;
    
            }
        });
        return true;
        
        
    }

}