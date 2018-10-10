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

  dataTypeStatus = [
    {name: 'Created', value: 0},
    {name: 'Active', value: 1},
    {name: 'Expired', value: 2},
  ]

  dataSource;
  deKeyDetail;
  data = [];

@ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'keyRingId', 'keyId', 'version', 'masterKeyProvider', 'status', 'description'];

  dataRequest = {
    minId : '1',
    recordCount : '500',
    keyRingId : '',
    keyId : '',
    version : '',
    status : '',
    createDateBegin : '',
    createDateEnd : '',
    updateDateBegin : '',
    updateDateEnd : '',
    expiryDateBegin : '',
    expiryDateEnd : ''
  }

  ClickRow(row){
    console.log(row);
    this.deKeyDetail = row;
    // setTimeout(() => {
    //   document.getElementById("requestDetail").scrollIntoView();    
    // }, 500);

  }

  ClickCreateDeKey(){
    this.deKeyDetail = {
      keyRingId: '',
      keyId: '',
      version: '',
      masterKeyProvider: '',
      status: '',
      description: ''
    }
  }

  RequestDeKey(){
    this.VerifyServise.GetDEKeySummary(this.dataRequest).subscribe((data:any) => {     
      console.log(data.json());
      
      if(data._body) 
      {
        this.data = data.json().result;
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;

        console.log(data.json().result);
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
