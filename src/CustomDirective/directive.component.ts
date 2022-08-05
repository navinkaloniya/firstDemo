import { Component} from '@angular/core'
import { IEmployee } from 'src/Model/Employee/employeeModel';

@Component({
    selector:'cus-dir',
    templateUrl:'./directive.component.html',
    styleUrls:['./directive.component.css']
})
export class DirectiveComponent{

    showColor:boolean=true;
    isBold:boolean=true;
    fontSize:number=20;

    employees:IEmployee[]= [
        {code:'1',name:'TOM',gender:'male',salary:3000},
        {code:'2',name:'Sara',gender:'female',salary:4000.656465},
        {code:'3',name:'Nick',gender:'male',salary:8000.565515},
        {code:'4',name:'Mary',gender:'female',salary:7000},
        {code:'5',name:'Mark',gender:'male1',salary:3000.256444}
    ];

    insertStyle(){
        let styles={'color': 'red','font-size': '20px'};
        return styles;
    }
    toggleClass(){
        this.showColor= !this.showColor;
    }
}



