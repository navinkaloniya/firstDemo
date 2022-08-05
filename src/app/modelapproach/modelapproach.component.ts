import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser} from 'src/Model/User/userModel'


@Component({
  selector: 'app-modelapproach',
  templateUrl: './modelapproach.component.html',
  styleUrls: ['./modelapproach.component.css']
})
export class ModelapproachComponent implements OnInit {

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
    {viewValue:2,Text:"FeMale"}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  saveUser(form:NgForm){
console.log(this.user);
console.log(form);
  }

}
