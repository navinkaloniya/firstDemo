import {Pipe,PipeTransform} from '@angular/core'


@Pipe({
    name:'EmployeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {
    transform(value: any,empgender:string):string {
       if(empgender=="male")
       return "Mr. "+value;
       else
       return "Miss "+value;

    }

}