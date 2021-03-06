import { Component, OnInit, ViewChild } from '@angular/core';
import { VerifyService } from '../../services/verify.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { CheckUserLoginService } from 'app/services/check-user-login.service';
import { Router } from '@angular/router';

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

  constructor( private VerifyServise: VerifyService, private CheckUserLogin: CheckUserLoginService,
    private router: Router) { 
    console.log(this.GetDataRequest());
    CheckUserLogin.checkUser(this.router.url);
  }
  selectedRowIndex
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
    recordCount: '500',
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

  dataStatusMass = [
    {name: 'Any', value: ''},
    {name: 'Deleted', value: 1},
    {name: 'Unassigned', value: 2},
    {name: 'In Progress', value: 3},
    {name: 'Pending Customer Input', value: 4},
    {name: 'Pending Business Input', value: 5},
    {name: 'Pending Legal Input', value: 6},
    {name: 'Complete', value: 7}
  ]

  dataStatus = {
    1: "Deleted",
    2: "Unassigned",
    3: "In Progress",
    4: "Pending Customer Input",
    5: "Pending Business Input",
    6: "Pending Legal Input",
    7: "Complete", 
  }

  errorStatus;
  loading;
  requestDetail;
  
  someClick(row){
    this.selectedRowIndex = row.id;
    console.log(row, this.selectedRowIndex);
    this.requestDetail = row;
  }

  requestDetailsCancel(e){
    this.requestDetail = e;
  }

  requestDetailsSave(e){
    this.requestDetail = e;
    this.GetDataRequest();
  }

  firstRunTime = Date.now();

  GetDataRequest(){
    if ((Date.now() - this.firstRunTime ) < 300)  return;

     this.firstRunTime = Date.now();
     this.GetData();
  }

  GetData(){
    this.VerifyServise.DataOwnerRequestQueue(this.dataRequest).subscribe((data: any) => {
      this.loading = false;
      console.log(data);
      if(data) 
      {
        this.data = data;
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;

        // console.log(data);
      }
      else{
        this.data = [];
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        console.log(this.data);
      }
    },(error) => {
      this.errorStatus = JSON.parse(error._body).debugMessage;
      this.loading = true;
    });
  }

  pressBackspace(e, key, key2){
    if(e.key == "Backspace"){
      this.dataRequest[key] = '';
      this.dataRequest[key2] = '';
      this.GetDataRequest();
    }
  }

  modelChangedDate(e, key){
    console.log(e);
    if(typeof(e) != "string" && e != null){
      this.dataRequest[key] = e.format("YYYY-MM-DD");
      console.log(this.dataRequest);
    }
    console.log(this.errorStatus);
    this.errorStatus = 'asd';
    this.GetDataRequest();
  }

  modelChanged(e){
    this.errorStatus = '';
    this.GetDataRequest();
  }

  ngOnInit() {
    this.GetData();
  }

}