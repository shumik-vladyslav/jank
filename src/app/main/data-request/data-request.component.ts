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
export class DataRequestComponent implements OnInit {

  constructor(
    private VerifyServise: VerifyService,
  ) { 
    console.log(this.method())
  }

  dataType = [
    {name: 'Type 1', value: 1},
    {name: 'Type 2', value: 1},
    {name: 'Type 3', value: 1},
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

  requestDetail;
  
  someClick(row){
    console.log(row);
    this.requestDetail = row;
  }

  requestDetailsCancel(e){
    this.requestDetail = e;
  }

  method(){
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

  ngOnInit() {
  }

  modelChanged(e){
    console.log(this.dataRequest);
    this.method();
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  
  {RequestID: 1, UserId: 1, RequesterName: '1.0079', Type: 'H', CreateDate: 1, SensitiveGroupId: 1, FullfillDate: 1, LastUpdateDate: 1, Status: '1'},
  {RequestID: 1, UserId: 1, RequesterName: '1.0079', Type: 'H', CreateDate: 1, SensitiveGroupId: 1, FullfillDate: 1, LastUpdateDate: 1, Status: '1'},
  {RequestID: 1, UserId: 1, RequesterName: '1.0079', Type: 'H', CreateDate: 1, SensitiveGroupId: 1, FullfillDate: 1, LastUpdateDate: 1, Status: '1'},
  {RequestID: 1, UserId: 1, RequesterName: '1.0079', Type: 'H', CreateDate: 1, SensitiveGroupId: 1, FullfillDate: 1, LastUpdateDate: 1, Status: '1'},
  {RequestID: 1, UserId: 1, RequesterName: '1.0079', Type: 'H', CreateDate: 1, SensitiveGroupId: 1, FullfillDate: 1, LastUpdateDate: 1, Status: '1'},
  {RequestID: 1, UserId: 1, RequesterName: '1.0079', Type: 'H', CreateDate: 1, SensitiveGroupId: 1, FullfillDate: 1, LastUpdateDate: 1, Status: '1'},
  {RequestID: 1, UserId: 1, RequesterName: '1.0079', Type: 'H', CreateDate: 1, SensitiveGroupId: 1, FullfillDate: 1, LastUpdateDate: 1, Status: '1'},
  {RequestID: 1, UserId: 1, RequesterName: '1.0079', Type: 'H', CreateDate: 1, SensitiveGroupId: 1, FullfillDate: 1, LastUpdateDate: 1, Status: '1'},
  {RequestID: 1, UserId: 1, RequesterName: '1.0079', Type: 'H', CreateDate: 1, SensitiveGroupId: 1, FullfillDate: 1, LastUpdateDate: 1, Status: '1'},
  {RequestID: 1, UserId: 1, RequesterName: '1.0079', Type: 'H', CreateDate: 1, SensitiveGroupId: 1, FullfillDate: 1, LastUpdateDate: 1, Status: '1'},
 
];