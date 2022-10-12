import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyLogo'
})
export class CompanyLogoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
