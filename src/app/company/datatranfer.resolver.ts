import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Company } from './model/company.model';
import { CompanyService } from './Service/company.service';

@Injectable()
export class DatatranferResolver implements Resolve<Company> {

constructor (private companyservice:CompanyService){

}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {

    
    return this.companyservice.getCompanyId(route.params['company_id']);
  }
}
