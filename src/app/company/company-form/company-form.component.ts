import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../model/company.model';
import { CompanyService } from '../Service/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

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
  constructor(private fb: FormBuilder, private companyService: CompanyService) { 
    this.companyForm = new FormGroup('');

  }



  ngOnInit(): void {
    this.companyForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(1)]],
      description: [null, [Validators.required, Validators.minLength(1)]],
    });
  }

  saveCompany() {
    if (this.companyForm.valid) {
      if (this.companyForm.value.id) {

      } else {

      }
      this.companyForm.reset()
    }
    else {
      console.log('form not Valid')
    }
    console.log(this.companyService)
  }

  resetForm() {
    this.companyForm.reset();
  }

}
