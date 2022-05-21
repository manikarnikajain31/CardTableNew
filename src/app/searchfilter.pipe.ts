import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './users';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(users: Users[], searchValue: string): Users[] {
    console.log(users, searchValue)

    if (users && !searchValue) {
      return users;

    }
    return users.filter(user => user.name?.toLocaleLowerCase()?.includes(searchValue.toLocaleLowerCase()));
  }

}
