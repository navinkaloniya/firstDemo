import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { CustomValidators } from 'src/validations/validators';

@Component({
  selector: 'dynamic-demo',
  templateUrl: './dynamic.component.html',
  //styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveDynamicComponent implements OnInit {
  
  personForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }
 
  ngOnInit(): void {
  

    this.personForm= this._fb.group({
      name:['',Validators.required],     
      email:['',[Validators.required,CustomValidators.emailCheckParam('gmail')]],
      age:[,[Validators.min(1),Validators.max(100),Validators.required]],
      skills:this._fb.group({
        skillName:['',[Validators.minLength(3),Validators.maxLength(10),Validators.required]],
        experience:[]
      })
    });  
}
addrow(){ 

}
submit(){

}
}
