import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/Model/Employee/employeeModel';

export class EmpDataService implements InMemoryDbService{

    constructor(){

    }   
    // createDb(): {} | Observable<{}> | Promise<{}> {
    //     throw new Error('Method not implemented.');
    // }
    createDb() {
       return {
        employees: [
            {code:'1',name:'TOM',gender:'male',salary:3000},
            {code:'2',name:'Sara',gender:'female',salary:4000.656465},
            {code:'3',name:'Nick',gender:'male',salary:8000.565515},
            {code:'4',name:'Mary',gender:'female',salary:7000},
            {code:'5',name:'Mark',gender:'male',salary:3000.256444}
        ],
        depts:[
            
        ]
    };    
    }

}

//Observable and Observer or Subscriber
//Observable- Asynchronous pattern which emit the data for us. We have Obervable and observer.
//Observer observes the observable.
//Observable can have multiple observer or subscriber.
//When a subscriber subscribes to an observable , the subscriber specify a callback function.
// The subscriber call back function is notified as and when the observables
// emit items or data or notifications.
//In the call back function we define or write the line of code to handle the data or item
// recieved from observables

