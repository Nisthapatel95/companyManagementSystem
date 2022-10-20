import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLogoPipe } from './pipe/company-logo.pipe';
import { SearchPipe } from './pipe/search.pipe';



@NgModule({
  declarations: [
    CompanyLogoPipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
     CompanyLogoPipe,
     SearchPipe
  ]
})
export class SharedModule { }
