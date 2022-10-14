import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company.model'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl: string = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  getCompanyList(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/company`);
  }
  addCompany(companydetail: Company): Observable<Company> {
    return this.http.post<Company>(`${this.baseUrl}/company/add`, companydetail);
  }

}
