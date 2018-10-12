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

  dataStatusMass = [
    {name: 'Created', value: 0},
    {name: 'Active', value: 1},
    {name: 'Expired', value: 2},
  ]

  dataStatus = {
    0: "Created",
    1: "Active",
    2: "Expired"
  }

  dataSource;
  deKeyDetail;
  data = [];

@ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'keyRingId', 'keyId', 'version', 'masterKeyProvider', 'status', 'description'];

  dataRequestKeys = {
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
    this.deKeyDetail = null;
    setTimeout(() => {
      this.deKeyDetail = row;
    },100)
  }

  requestDetailsCancel(e){
    this.deKeyDetail = e;
  }

  requestDetailsSave(e){
    this.deKeyDetail = e;
    this.RequestDeKey();
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

  firstRunTime = Date.now();
  RequestDeKey(){
    if ((Date.now() - this.firstRunTime ) < 300)  return;

     this.firstRunTime = Date.now();
     this.GetData();
  }

  GetData(){
    this.VerifyServise.GetDEKeySummary(this.dataRequestKeys).subscribe((data:any) => {     
      if(data._body) 
      {
        this.data = data.json().result;
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
        console.log("123 " + data);
      }
    });
  }

  ngOnInit() {
    this.GetData();
  }

  modelChanged(e){
    console.log("qqqqqqqqqq" + e);
    this.RequestDeKey();
  }

  modelChangedDate(e){
    console.log(e);
    if(typeof(e) != "string" && e != null){
      e = e.format("YYYY-MM-DD");
    }
    console.log("qqqqqqqqqq" + e); 
    this.RequestDeKey();
  }
}
