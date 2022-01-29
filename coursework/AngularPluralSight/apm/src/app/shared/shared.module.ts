import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { convertToSpacesPipe } from './convertToSpace.pipe';



@NgModule({
  declarations: [
    StarComponent,
    convertToSpacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    convertToSpacesPipe
  ]
})
export class SharedModule { }
