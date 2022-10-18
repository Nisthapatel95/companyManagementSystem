
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Company } from '../model/company.model';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

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
    // debugger
    return this.http.get<Company>(`${this.baseUrl}/company/${id}`);
  }

  //subject

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


}