import { Component} from'@angular/core'
import { ActivatedRoute, TitleStrategy } from '@angular/router';

@Component({
selector:'emp',
templateUrl:'./employee.component.html',
// styles:[`.table-class {
//     color: red;
//     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;    
// }`]
styleUrls:['./employee.component.css']
})
export class EmployeeComponent {
    //snapshot approach we use( Activated Route class)
    //observable
    EmployeeId:string|null='';
    empCode:string="";
    //EmployeeId:number=0;
    constructor(private _route:ActivatedRoute){

    }
    ngOnInit(){
    // this.EmployeeId= this._route.snapshot.paramMap.get('id');
     this.EmployeeId= this._route.snapshot.paramMap.get('code');
     if(this._route.snapshot.queryParamMap.has('empcode')){

this.empCode= this._route.snapshot.queryParamMap.get('empcode')!;
     }
   let keys:string[]=  this._route.snapshot.queryParamMap.keys;
    }
firstName:string="Tom";
gender:string="Male";
age:number=29;
pincode:number=202020;
imagesrc="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
isDisabled:boolean=false;
colspanNo:number=2;
getEmployeeDetails():string{
    return this.firstName+" "+ this.gender+" "+this.age;
}
clicked(no:number){
    console.log(no);
}

}