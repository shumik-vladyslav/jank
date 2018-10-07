import { Component, OnInit, ViewChild } from '@angular/core';
import { VerifyService } from '../../services/verify.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-manage-de-keys',
  templateUrl: './manage-de-keys.component.html',
  styleUrls: ['./manage-de-keys.component.scss']
})

export class ManageDeKeysComponent implements OnInit {

  constructor( private VerifyServise: VerifyService ) {
    console.log(this.RequestDeKey());
   }

  dataType = [
    {name: 'Type 1', value: 1},
    {name: 'Type 2', value: 1},
    {name: 'Type 3', value: 1},
  ]

  dataSource;
  data = [];

@ViewChild(MatPaginator) paginator: MatPaginator;


  //displayedColumns: string[] = ['minId', 'recordCount', 'keyRingId', 'keyId', 'version', 'status', 'createDateBegin', 'createDateEnd', 'updateDateBegin', 'updateDateEnd', 'expiryDateBegin', 'expiryDateEnd'];
  //displayedColumns: string[] = ['id', 'keyRingId', 'keyId', 'version', 'masterKeyProvider', 'status', 'description'];

  dataRequest = {
    // minId : '1',
    // recordCount : '1000',
    // keyRingId : '',
    // keyId : '',
    // version : '',
    // status : '',
    // createDateBegin : '',
    // createDateEnd : '',
    // updateDateBegin : '',
    // updateDateEnd : '',
    // expiryDateBegin : '',
    // expiryDateEnd : ''
    beginIndex : '1',
    count : '50'
  }

  RequestDeKey(){
    this.VerifyServise.RequestDeKey(this.dataRequest).subscribe((data:any) => {     
      console.log(data.json());
      
      if(data._body) 
      {
        this.data = data.json();
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;

        console.log(data.json());
      }
    });
  }

  ngOnInit() {
  }

  modelChanged(e){
    console.log(this.dataRequest);
    this.RequestDeKey();
  }
}
