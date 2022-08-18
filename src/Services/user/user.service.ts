import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    backcolor:string='yellow';
    constructor(){
        console.log("New instance created");
    }
}