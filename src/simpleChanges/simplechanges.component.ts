import { JsonPipe } from '@angular/common';
import { Component, Input, SimpleChanges,OnChanges } from '@angular/core'

@Component({
   selector:'simple',   
   template:`Entered Value :{{title}}
             `
})
export class SimpleChangesComponent implements OnChanges {
    @Input()
   title:string = '';

   

  ngOnInit() {
  //http call to get the data //10s
  }

  ngOnChanges(changes:SimpleChanges){
     console.log(changes);
     for(let propertyName in changes) {
          let changeJson= changes[propertyName];
          let currentValue= JSON.stringify(changeJson.currentValue);
          let previousValue=JSON.stringify(changeJson.previousValue);
          console.log(propertyName +" Currentvalue ="+currentValue+ " Previous Value = "+previousValue);
          console.log(`${propertyName}:Current Value = ${currentValue} Previous Value = ${previousValue}`)
     }
  }
}
