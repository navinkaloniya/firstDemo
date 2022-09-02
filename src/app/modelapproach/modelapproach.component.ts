import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser} from 'src/Model/User/userModel'


@Component({
  selector: 'app-modelapproach',
  templateUrl: './modelapproach.component.html',
  styleUrls: ['./modelapproach.component.css']
})
export class ModelapproachComponent implements OnInit {

  @ViewChild('userForm') createUserForm!:NgForm;

  user:IUser={
    id:0,
    name:"",
    gender:"",
    department:"",
    email:"",
    phoneNumber:0
  }
  genders:any[]=[
    {viewValue:-1,Text:"Select Gender"},
    {viewValue:1,Text:"Male"},
    {viewValue:2,Text:"Female"}
  ];
  constructor(private _roter:Router) { }

  ngOnInit(): void {
  }
  saveUser(form:NgForm){
console.log(this.user);
console.log(form);
//this._roter.navigate(['employee-list']);

  }

}

//CanDeactivate route guard