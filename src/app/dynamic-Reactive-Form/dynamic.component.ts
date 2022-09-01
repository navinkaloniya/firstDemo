import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { CustomValidators } from 'src/validations/validators';

@Component({
  selector: 'dynamic-demo',
  templateUrl: './dynamic.component.html',
  //styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveDynamicComponent implements OnInit {
  
  //You can not define the default value in the subject
  //obj$= new Subject<number>();

  // To define the default value for the subject use behaviour subject
  obj$= new BehaviorSubject<number>(1);

  // it is used to store the value emited previously. Parameter define the count
  // bow many value i want to preserve
  repObj$= new ReplaySubject<number>(3);

  constructor() { }
 
  ngOnInit(): void {
  console.log("called");
    this.obj$.subscribe(d=>{
      console.log(" NG Onit :"+d);
    })
}
submit(){
  this.obj$.next(567); 
  //NG Onit: 567
  this.obj$.subscribe(d=>{
    console.log("  method 1 :"+d);
  })

  this.obj$.next(678);  // this.obj$.next(567);  this.obj$.next(678);
  this.obj$.subscribe(d=>{
    console.log("  method 2 :"+d);
  })
  this.obj$.next(888);
}
click(){
  this.obj$.next(999);
  this.obj$.subscribe(d=>{
    console.log("  click method  :"+d);
  })
}

replay(){
  this.repObj$.next(1);
  this.repObj$.next(2);
  this.repObj$.next(3);
  this.repObj$.next(4);
  this.repObj$.subscribe(d=> console.log(d));
  
  this.repObj$.subscribe(d=> console.log(d));
}
}


