import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-module',
  templateUrl: './person-module.component.html',
  styleUrls: ['./person-module.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }
  pincode:number=202020;
  ngOnInit(): void {
  }

}
