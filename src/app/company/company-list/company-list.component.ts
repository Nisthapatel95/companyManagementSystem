
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Company } from '../model/company.model';
import { CompanyService } from '../Service/company.service';
import { Router } from '@angular/router';
import { DataCommunicationService } from '../Service/data-communication.service';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  @Output() companyId: EventEmitter<number> = new EventEmitter<number>();

  @Input() companyList: Company[]
  public searchInput: string;

  constructor(private companyService: CompanyService, private router: Router, private dataCommunication: DataCommunicationService)
   {
     this.companyList = [] 
     this.searchInput = "";
    }

  ngOnInit(): void {
    this.dataCommunication.CommunicationData$.subscribe((data: any) => {
      if (data) {
       
        this.getCompanyData();
      }
    })
    this.getCompanyData();
    console.log(this.companyList.length);
  }
  getCompanyData() {
    this.companyService.getCompanyDetails().subscribe((data: Company[]) => {
      this.companyList = data;
    })
  }
  
  
  onAddCompany() {
    this.router.navigateByUrl('company/add');
  }
  onEditCompany(company: Company) {
    this.router.navigateByUrl(`company/edit/${company.id}`);
  }
  onDeleteCompany(companyId: number) {
    if (confirm('Are you sure to delete this company?')) {
      this.companyService.deleteCompanyDetails(companyId).subscribe(() => {
        this.getCompanyData();
      })
      this.router.navigateByUrl("company/add")
    }
  }

}
