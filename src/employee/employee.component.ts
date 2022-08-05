import { Component} from'@angular/core'

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