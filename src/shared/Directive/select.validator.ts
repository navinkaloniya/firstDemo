import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
    selector:'[selectValidate]',
    providers:[
       {
           provide:NG_VALIDATORS,
           useExisting:SelectValidator,
           multi:true
       } 
    ]
})
export class SelectValidator implements Validator{
    validate(control: AbstractControl): {[key: string]: any} | null {
         if(control.value===-1)
         return {'defaultSelected':true}
         else
         return null;
    }

}