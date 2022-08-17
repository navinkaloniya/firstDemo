import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatDialogModule
      ],
      exports:[
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatDialogModule
      ]
})
export class MaterialModule{

}