import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../model/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  @Input() companyList: Company[]

  constructor() { this.companyList = [] }

  ngOnInit(): void {
  }
}
