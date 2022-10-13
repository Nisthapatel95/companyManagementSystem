import { Component, OnInit } from '@angular/core';
import { Company } from './model/company.model';
import { CompanyService } from './Service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) { this.companies = [] }

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList() {
    this.companyService.getCompanyList().subscribe((res: Company[]) => {
      this.companies = res;
      console.log(this.companies)
    })
  }

}