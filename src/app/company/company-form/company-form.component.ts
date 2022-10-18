
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from '../model/company.model';
import { CompanyService } from '../Service/company.service';

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
  constructor(private fb: FormBuilder, private companyService: CompanyService, private router: Router) { }


  ngOnInit(): void {
    this.companyForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(1)]],
      description: [null, [Validators.required, Validators.minLength(1)]],
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

  resetForm() {
    this.companyForm.reset();
  }

  addcompany() {
    this.companyService.addCompany(this.companyForm.value).subscribe((res: Company) => {
      this.companyService.sendcompanyDetails(res)
    })
  }
}