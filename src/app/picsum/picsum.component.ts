import { Component, OnInit } from '@angular/core';

import { PicsumService } from '../services/picsum.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-picsum',
  templateUrl: './picsum.component.html',
  styleUrls: ['./picsum.component.css']
})
export class PicsumComponent implements OnInit {
  // picsumService: any;
  picsum: any;
  

  constructor(private picsumService: PicsumService) { }

  ngOnInit(): void {
    this.getImages(1);
  }

  getImages(pageno: number){
    this.picsum=this.picsumService.getPicsum(pageno);
  }
  onChangePage(pageno: number) {
    this.getImages(pageno);
  }
}
