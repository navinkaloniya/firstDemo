import{Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
    selector:'emp-count',
    templateUrl:'./employeeCount.component.html'
})
export class EmployeeCountComponent{
    
    @Input() 
    allCount:number=0;

    @Input()
    maleCount:number=0;

    @Input()
    femaleCount:number=0;

   
    //Hold the selected value for the radio button
    //Default value we have given so that All radio button will be selected by default
    selectedRBValue:string="All";

    // Output decorator make your property an output property
    @Output()
    rbselectionChange:EventEmitter<string> = new EventEmitter<string>();

    // Event raised when user click on radiobutton and we will emit ot throw the value
    onRadioButtonSelectionChange(){
        console.log("Child = "+this.selectedRBValue);
    this.rbselectionChange.emit(this.selectedRBValue);

    }

}