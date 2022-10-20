import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyComponent } from './company.component';
import { DatatranferResolver } from './datatranfer.resolver';

const routes: Routes = [
 {
    path: '',
    component: CompanyComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'add'
    },
    //  {
    //   path: 'add',
    //   component:CompanyFormComponent
    // }
    {
      path:'add',
      component:CompanyFormComponent,
      
    },
    {
      path:'edit/:company_id',
      component:CompanyFormComponent,
      resolve:{company:DatatranferResolver}
    }
  ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
