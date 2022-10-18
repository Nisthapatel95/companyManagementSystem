
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Company } from '../model/company.model';
import { CompanyService } from '../Service/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  @Output() companyId: EventEmitter<number> = new EventEmitter<number>();

  @Input() companyList: Company[]
  

  constructor(private router: Router, private CompanyService: CompanyService) { this.companyList = [] }

  ngOnInit(): void {
    
    
  }


  getCompanyDetail(company: Company) {
    this.router.navigate([`company/${company.id}`])
    this.CompanyService.sendCompanyId(company.id)
  }

  onAddCompany(){
    this.router.navigateByUrl('company/add');
  }
}
