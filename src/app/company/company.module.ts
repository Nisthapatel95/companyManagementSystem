import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyLogoPipe } from '../shared/pipe/company-logo.pipe';
import { SharedModule } from '../shared/shared.module';
import { DataCommunicationService } from './Service/data-communication.service';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent,
   
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  
  ],
  providers:[
    DataCommunicationService
  ]
})
export class CompanyModule { }
