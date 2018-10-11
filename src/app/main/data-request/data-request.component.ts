import { Component, OnInit, ViewChild } from '@angular/core';
import { VerifyService } from '../../services/verify.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  RequestID: number;
  UserId: number;
  RequesterName: string;
  Type: string;
  CreateDate: number;
  SensitiveGroupId: number;
  FullfillDate: number;
  LastUpdateDate: number;
  Status: string;
}

@Component({
  selector: 'app-data-request',
  templateUrl: './data-request.component.html',
  styleUrls: ['./data-request.component.scss']
})
export class DataRequestComponent implements OnInit{

  constructor( private VerifyServise: VerifyService ) { 
    console.log(this.method())
  }

  dataType = {
    0: "Any",
    1: "Data Request",
    2: "Erase Request",
  }

  dataTypeMass = [
    {name: 'Any', value: 0},
    {name: 'Data Request', value: 1},
    {name: 'Erase Request', value: 2},
  ]

  displayedColumns: string[] = ['id', 'userId', 'requesterName', 'type', 'createTime', 'electronicSignature', 'fulfillTime', 'updateTime', 'status'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  data = [];

  dataRequest = {
    minId: '1',
    recordCount: '50',
    type: '',
    sigId: '',
    userId: '',
    requestDateBegin: '',
    requestDateEnd: '',
    electronicSignature: '',
    fulfillDateBegin: '',
    fulfillDateEnd: '',
    status: '',
  }

  dataStatus = {
    1: "Deleted",
    2: "Unassigned",
    3: "In Progress",
    4: "Pending Customer Input",
    5: "Pending Business Input",
    6: "Pending Legal Input",
    7: "Complete", 
  }

  requestDetail;
  
  someClick(row){
    console.log(row);
    this.requestDetail = row;
  }

  requestDetailsCancel(e){
    this.requestDetail = e;
  }

  requestDetailsSave(e){
    this.requestDetail = e;
    this.method();
  }

  firstRunTime = Date.now();

  method(){
    if ((Date.now() - this.firstRunTime ) < 300)  return;

     this.firstRunTime = Date.now();
     this.GetData();
  }

  GetData(){
    this.VerifyServise.DataOwnerRequestQueue(this.dataRequest).subscribe((data: any) => {
      console.log(data);
      if(data._body) 
      {
        this.data = data.json();
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;

        console.log(data.json());
      }
    });
  }

  modelChanged(e){
    this.method();
  }

  ngOnInit() {
    this.GetData();
  }

}