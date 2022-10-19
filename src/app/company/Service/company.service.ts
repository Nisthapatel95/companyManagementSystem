
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Company } from '../model/company.model';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  // deleteCompanyDetails(companyId: number) {
  //   throw new Error('Method not implemented.');
  // }

  baseUrl: string = 'http://localhost:3000';

  selectedId: Subject<number> = new Subject();
  companyDetails: Subject<Company> = new Subject();


  constructor(private http: HttpClient) {

  }
  getCompanyList(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/company`);
  }

  addCompany(companydetail: Company) {
    debugger
    return this.http.post<Company>(`${this.baseUrl}/company`, companydetail);
  }

  getCompanyById(id: number): Observable<Company> {
   
    return this.http.get<Company>(`${this.baseUrl}/company/${id}`);
  }


  sendCompanyId(id:number){
    this.selectedId.next(id);
  }

  getCompanyId(): Observable<number>{
    return this.selectedId.asObservable()
  }

  //for details subhject
  sendcompanyDetails(company:Company){
    this.companyDetails.next(company);
  }

  getcompanyDetails(): Observable<Company>{
    return this.companyDetails.asObservable()
  }

  addCompanyDetails(company:Company):Observable<Company>{
    const url = `${this.baseUrl}/company`;
    return this.http.post<Company>(url,company);
  }
  getCompanyDetails(): Observable<Company[]>{
    const url = `${this.baseUrl}/company`;
    return this.http.get<Company[]>(url);
  }
  deleteCompanyDetails(company_id:number):Observable<Company>{
    const url = `${this.baseUrl}/company/${company_id}`;
    return this.http.delete<Company>(url);
  }

}