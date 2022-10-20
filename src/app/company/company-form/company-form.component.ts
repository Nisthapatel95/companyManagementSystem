
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
=======
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
>>>>>>> 47d9c789ba6aff9f4f6857e40d980f6d1071dac4
import { Company } from '../model/company.model';
import { CompanyService } from '../Service/company.service';
import { DataCommunicationService } from '../Service/data-communication.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})

export class CompanyFormComponent implements OnInit {

  @Output() companyDetail: EventEmitter<Company> = new EventEmitter<Company>()
  @Output() companyDetailToEdit: EventEmitter<Company> = new EventEmitter<Company>()

  companyForm: FormGroup;
  companyToEdit: Company;
  public companyId: string;
  isSubmitted: boolean;



  @Input() set companyEdit(value: Company) {
    if (value) {
      this.companyToEdit = value;
      this.companyForm.patchValue(this.companyToEdit)
    }
  }
  @Input() set resetFormValue(value: boolean) {
    if (value) {
      this.companyForm.reset()
    }
  }

  /**
   * 
   * @param fb 
   * @param companyService 
   * @param router 
   */
  constructor(private fb: FormBuilder, private companyService: CompanyService, private router: Router ,private activatedRoute:ActivatedRoute, private datacommunication: DataCommunicationService) {
    this.companyId = "";
    this.activatedRoute.params.subscribe((params) => {
      this.companyId = params['company_id'];
      if (this.companyId) {
        this.getCompanyDetails();
      }})
    
   }


  ngOnInit(): void {
    this.companyForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(1)]],
      description: ['', Validators.required],
        Tags: ['', Validators.required],
        companyLogo: ['', Validators.required]
    });
    this.companyService.getcompanyDetails().subscribe((res) => {
      if (res) {
        this.companyForm.patchValue(res)
      }
    })
  }

  saveCompany() {
    if (this.companyForm.valid) {
      if (this.companyForm.value.id) {
        this.companyDetailToEdit.emit(this.companyForm.value)

      } else {
        this.addcompany()
        this.companyDetail.emit(this.companyForm.value)

      }
      this.companyForm.reset()
    }
    else {
      console.log('form not Valid')
    }
    console.log(this.companyService)

    this.router.navigateByUrl("company/add")
  }

  get FormControls(): { [key: string]: AbstractControl } {
    return this.companyForm.controls
  }

  

  resetForm() {
    this.companyForm.reset();
  }
  onSaveCompany() {
    this.isSubmitted = true;
    if (this.companyForm.valid) {
      if (this.companyId) {
        this.EditCompanyData();
      }
      else {
        this.AddCompanyData();
      }
    }
    this.companyForm.reset();
    this.isSubmitted = false;
    this.router.navigateByUrl("company/add");
  }
  EditCompanyData() {
    throw new Error('Method not implemented.');
  }
  AddCompanyData() {
    throw new Error('Method not implemented.');
  }

  addcompany() {
    this.companyService.addCompany(this.companyForm.value).subscribe((res: Company) => {
<<<<<<< HEAD
      this.companyService.sendcompanyDetails(res)
    })
  }
=======
      this.datacommunication.getData(res)
    })
  }
  getCompanyDetails() {
    this.companyService.getCompanyById(Number(this.companyId )).subscribe((data: Company) => {
      this.companyForm.patchValue(data);
      // this.name = data.name;
    })
}
>>>>>>> 47d9c789ba6aff9f4f6857e40d980f6d1071dac4
}