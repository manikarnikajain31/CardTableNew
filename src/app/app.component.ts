import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { Users } from './users';
import { RestService } from './rest.service';
import { SelectorMatcher } from '@angular/compiler';
// import {Sort} from '@angular/material/sort';
import { PicsumComponent } from './picsum/picsum.component';
import { PicsumService } from './services/picsum.service';
import { HttpClient } from '@angular/common/http';
//import { FilterComponent } from './filter/filter.component';
// import { MatConfigDialogComponent } from './mat-config-dialog/mat-config-dialog.component';
// import { DialogService } from './services/dialog.service';
// import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SearchfilterPipe } from './searchfilter.pipe';


// Table
const ELEMENT_DATA: Users[] = [
  { id: 1, name: 'Virat Kohli', email: 'virat@gmail.com', phone: 9876543210, profile: 'viratkohli.jpg' },
  { id: 2, name: 'Rohit Sharma', email: 'rohit@gmail.com', phone: 912345678, profile: 'rohitsharma.jpg' },
  { id: 3, name: 'Sachin Tendulkar', email: 'sachin@gmail.com', phone: 9234567810, profile: 'sachin.jpg' },
  { id: 4, name: 'MS Dhoni', email: 'ms@gmail.com', phone: 9345678912, profile: 'dhoni.jpg' },
  { id: 5, name: 'Hardik Pandya', email: 'hardik@gmail.com', phone: 8380067167, profile: 'hardik.jpg' },
  { id: 6, name: 'Ravindra Jadeja', email: 'ravindra@gmail.com', phone: 9822067167, profile: 'ravindra.jpg' },
  { id: 7, name: 'Shikhar Dhawan', email: 'shikhar@gmail.com', phone: 9764567167, profile: 'Shikha.jpg' },
  { id: 8, name: 'Yuvraj Singh', email: 'yuvraj@gmail.com', phone: 8380045667, profile: 'yuvraj.jpg' },

];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {

  displayedColumns: any[] = ['id', 'name', 'email', 'phone', 'profile'];
  dataArray = new MatTableDataSource<Users>(ELEMENT_DATA);

  searchValue: string = "";
  searchField!: FormControl;
  columns: string[] | undefined;
  sortedcolumn: string | undefined;
  users: Users[] = [];
  Name: any;
  p: number = 1;
  picsum: any;
  // sortedData: any;
  pageNo: number = 1;
  enteredSearchValue: string = '';
  searchText: string = '';
  modalService: any;
  deleteId: string | undefined;
  httpClient: any;
  filterField: string = "all";
  name: string | undefined;
  id: number | undefined;
  email: string | undefined;
  phone: number | undefined;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataArray.sort = sort;
  }


  constructor(public rs: RestService,
    // private _dialog: MatDialog, private _dialogService: DialogService, //private _service:UserService
  ) {
    this.searchField = new FormControl();

  }
  // title = 'card-layout';
  // title = 'card-layout';
  exform!: FormGroup;
  filterTable($event: any) {
    this.dataArray.filter = $event.target.value.trim().toLowerCase();

  }



  ngOnInit(): void {
    this.getUsers(1)
    this.dataArray.paginator = this.paginator;
  }

  setPageNo($event: any) { console.log(this.pageNo) }

  goNext() {
    if (this.pageNo >= 2) {
      return
    }

    this.pageNo += 1
    this.getUsers(this.pageNo)


  }
  goPrevious() {
    if (this.pageNo <= 1) {
      return
    }


    this.pageNo -= 1
    this.getUsers(this.pageNo)
  }
  getUsers(pageno: number) {
    this.rs.getUsers(pageno).subscribe((response) => {
      this.users = response;
    });

  }
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  // Delete Operation

  openDelete(user: Users) {

    const shouldDelete = confirm(`Are you sure you want to delete Name:${user.name}, Email:${user.email}, Phone:${user.phone}`)
    if (shouldDelete) {
      this.rs.deleteUsers(user, () => {
        this.getUsers(1)
      })
    }
  }

  // onDelete() {
  //   const deleteUrl = 'http://localhost:4200/' + this.deleteId + '/delete';
  //   this.httpClient.delete(deleteUrl).subscribe(next, (result: object) => {
  //     this.ngOnInit();
  //     this.modalService.dismissAll();
  //   });
  // }


  // applyFilter(filterValue: string) {
  //   this.dataArray.filter = filterValue.trim().toLowerCase();
  // }



}

function next(next: any, arg1: (result: object) => void) {
  throw new Error('Function not implemented.');
}