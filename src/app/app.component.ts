import { Component } from '@angular/core'

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
   selector:'app-root',
   //inline template
  //  template:`Title :<input  [value]='title'> 
  //            you entered title = {{title}} <br>
  //            <input [(ngModel)]='title'>
  //            `
    //external templates
   templateUrl:'./app.component.html'
})
export class AppComponent {
  userInput:string = '';
  name:string="John";

  getdata():string {
    return this.userInput+this.name;
  }

  btnClicked($event:any){
    console.log("btnClicked = "+$event);
  }
  
  btnClicked1($event:any){
    console.log("btnClicked1 = "+$event);
  }
}

//In the APP Component Change the HTML Layout
// Add some proerties and value
// Use interpolation to get the value rom the class property to HTML page
// Use template and template URLS property and see the behaviour
// Create decorator by yourself once
// Test all this case scenario 

// Crate a component Employee
// Add FirstName, Gender,Age,Pincode
// IN HTML create a TABle and access this properties values by interpolation
// Make it a part of module
// Type the selector name to make it a nested component
// Run the page ands see the output
