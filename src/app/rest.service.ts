import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Users } from './users';
// import { MatConfigDialogComponent } from './mat-config-dialog/mat-config-dialog.component';
// import { DialogService } from './services/dialog.service';

@Injectable({
  providedIn: 'root'

})
export class RestService {


  constructor(private http: HttpClient) { }

  url: string = "";
  getUsers(pageno: number) {
    return this.http.get<Users[]>(`http://localhost:3000/Users?_page=${pageno}&_limit=4`);

  }
  deleteUsers(user: Users, callback: any) {

    const deleteUrl = 'http://localhost:3000/Users/' + user.id;
    this.http.delete(deleteUrl).subscribe((result: object) => {
      callback()
      alert("Data Deleted")



    });

  }
}
function next(next: any, arg1: (result: object) => void) {
  throw new Error('Function not implemented.');
}

