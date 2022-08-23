import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-form-demo.component.html',
  //styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveDemoComponent implements OnInit {
  
  personForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }
 
  ngOnInit(): void {
    this.personForm= new FormGroup({
      name:new FormControl(),
      age:new FormControl(23),
      skills:new FormGroup({
        skillName:new FormControl(),
        experience:new FormControl(8)
      })
    });

    // this.personForm= this._fb.group({
    //   name:[''],
    //   age:[],
    //   skills:this._fb.group({
    //     skillName:[''],
    //     experience:[]
    //   })
    // });
  }
  submit(){
    // console.log(this.personForm);
    // console.log(this.personForm.invalid);


    // console.log(this.personForm.value);
    // console.log(this.personForm.get('name')!.value);
    // console.log(this.personForm.controls['name'].value);

    // console.log(this.personForm.controls['name'].valid);
    // console.log(this.personForm.controls['name'].pristine);
    // console.log(this.personForm.controls['name'].dirty);
    console.log(this.personForm.controls['skills'].get('skillName'));
    console.log( (<FormGroup>this.personForm.controls['skills']).controls['skillName']);

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
