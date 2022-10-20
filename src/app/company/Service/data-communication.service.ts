
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Company } from '../model/company.model';


@Injectable()
export class DataCommunicationService {

  public CommunicationData$: Observable<Company>;
  private CommunicationData: Subject<Company>;

  constructor() {
    this.CommunicationData = new Subject();
    this.CommunicationData$ = this.CommunicationData.asObservable();
  }

  getData(company: Company) {
    this.CommunicationData.next(company);
  }
}
