import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'companyLogo'
})
export class CompanyLogoPipe implements PipeTransform {

 transform(value: string ): string {
  value = value.toUpperCase();
  let NameLogo ="";
  if(value.indexOf('') >= 0){
    var companyName = value.split('');
    NameLogo = companyName[0].charAt(0) + companyName[1].charAt(0);
  }
  else{
    NameLogo = value.substring(0,2);
  }
  return NameLogo;
 } 
    
 }


