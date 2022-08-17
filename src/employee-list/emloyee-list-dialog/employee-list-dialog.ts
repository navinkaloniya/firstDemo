import{Component} from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    templateUrl:'./employee-list.dialog.html',   
})
export class EmployeeListDialogComponent{

    constructor(private dialogRef:MatDialogRef<EmployeeListDialogComponent>){

    }

    close() {
    this.dialogRef.close();
    }
}