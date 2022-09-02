import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ModelapproachComponent } from "src/app/modelapproach/modelapproach.component";


@Injectable()
export class CreateUserCanDeactivateGuardService implements
 CanDeactivate<ModelapproachComponent> {
    constructor(){}
    canDeactivate(component: ModelapproachComponent):boolean{
       if(component.createUserForm.dirty)
       {
        return confirm('Are you sure you want to discard your changes?.')
       }
       else
       return true;
    }

}