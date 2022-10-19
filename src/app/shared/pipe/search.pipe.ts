// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

import { Company } from 'src/app/company/model/company.model';

import { DataCommunicationService } from 'src/app/company/Service/data-communication.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  /**
   * search company from Company array
   * @param data 
   * @param searchItem 
   * @returns Company[]
   */
  transform(data: Company[], searchItem: string): any {

    if (!searchItem) {
      return data;
    }

    searchItem = searchItem.toLowerCase();

    const d = data.filter((item) => {
      return item.name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1;
    })

    return d;
  }
}