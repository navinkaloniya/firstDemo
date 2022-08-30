import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { CustomValidators } from 'src/validations/validators';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-form-demo.component.html',
  //styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveDemoComponent implements OnInit {
  
  personForm!:FormGroup;
  constructor(private _fb:FormBuilder,
    private _empService:EmployeeService) { }
 
  ngOnInit(): void {
    // this.personForm= new FormGroup({
    //   name:new FormControl(),
    //   age:new FormControl(23),
    //   skills:new FormGroup({
    //     skillName:new FormControl(),
    //     experience:new FormControl(8)
    //   })
    // });

    this._empService.loggedIn$.subscribe((data:boolean)=>{
      console.log('Value from employee Service in Reactive form component : '+data);

// assign the property

          });
          
    this.personForm= this._fb.group({
      name:['',Validators.required],
      //validation withour parameter
      //email:['',[Validators.required,CustomValidators.emailCheck]],
      // validation with parameter
      email:['',[Validators.required,CustomValidators.emailCheckParam('gmail')]],
      age:[,[Validators.min(1),Validators.max(100),Validators.required]],
      skills:this._fb.group({
        skillName:['',[Validators.minLength(3),Validators.maxLength(10),Validators.required]],
        experience:[]
      })
    });
    //For control in main form Group
    this.personForm.get('name')!.valueChanges.subscribe(value=>{
      console.log(value);
  });
// For control in nested form Group
    this.personForm.get('skills.skillName')!.valueChanges.subscribe(value=>{
        console.log(value);
    });
    const formArray= new FormArray([
        new FormControl('John',Validators.required),
        new FormGroup({
          name:new FormControl('Tom',Validators.required)
        }),
        new FormArray([])
    ])

    const formArray1= this._fb.array([
      new FormControl('John',Validators.required),
      new FormGroup({
        name:new FormControl('Tom',Validators.required)
      }),
      new FormArray([])
  ]);
  console.log(this.personForm.value);
  console.log(formArray.value);

  } 
  
  addrow(){

  }
  submit(){
     console.log(this.personForm);
    //  console.log(this.personForm.get('name'));
    //  console.log(this.personForm.get('name')!.errors);
    //  console.log(this.personForm.get('name')!.errors!['required']);
    console.log(this.personForm.get('age'));
     console.log(this.personForm.get('age')!.errors);
    // console.log(this.personForm.get('age')!.errors!['min']);
     console.log(this.personForm.get('age')!.errors);
    // console.log(this.personForm.invalid);


    // console.log(this.personForm.value);
    // console.log(this.personForm.get('name')!.value);
    // console.log(this.personForm.controls['name'].value);

    // console.log(this.personForm.controls['name'].valid);
    // console.log(this.personForm.controls['name'].pristine);
    // console.log(this.personForm.controls['name'].dirty);
    // console.log(this.personForm.controls['skills'].get('skillName'));
    // console.log(this.personForm.get('skills.skillName')!.dirty);
    // console.log( (<FormGroup>this.personForm.controls['skills']).controls['skillName']);

  }

  loaddata(){
    // We have to provide the value for each control in the form
    // this.personForm.setValue({
    //   name:'Tom',
    //   age:23,
    //   skills:{
    //     skillName:'Angular',
    //     experience:9
    //   }
    // })

    //is used to update the form partially 
    this.personForm.patchValue({
      name:'Tom',
      skills:{
        skillName:'Angular'
      }
    })
  }
}


// FormGroup and FormControl - to create a control tree in reactive form approach
// FormGroup- This is to create a group of FormControl inside it
// FormControl- Individual control in the form group. To create a individual control in form group 
// we use the instance of FormControl
// FormGroup can have Nested formGroup in it
// required, email, Pattern, Min, Max, MinLength, MaxLength
//Form Group and Formcontrol classes inherit from AbstractControl ( base class)
// AbstractControl class have a property of ValueChanges ( returning Observable)

//FormArray - its an array. it can contain FormGroup,Formcontrol and nested formArray