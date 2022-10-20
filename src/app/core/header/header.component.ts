import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from 'src/app/company/Service/data-communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public companyName: string;
  constructor( private dataCommunicationService:DataCommunicationService) { }

  ngOnInit(): void {
    this.dataCommunicationService.BreadCrumbData.subscribe((res:string)=>{
     console.log(this.companyName);
     
      this.companyName = res;
    })
  }
  }


