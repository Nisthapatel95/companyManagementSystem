import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLogoPipe } from './pipe/company-logo.pipe';



@NgModule({
  declarations: [
    CompanyLogoPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
     CompanyLogoPipe
  ]
})
export class SharedModule { }
