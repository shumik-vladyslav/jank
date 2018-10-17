import { Component, OnInit, ViewChild } from '@angular/core';
import { VerifyService } from '../../services/verify.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { CheckUserLoginService } from 'app/services/check-user-login.service';

@Component({
  selector: 'app-manage-de-keys',
  templateUrl: './manage-de-keys.component.html',
  styleUrls: ['./manage-de-keys.component.scss']
})

export class ManageDeKeysComponent implements OnInit {

  constructor( private VerifyServise: VerifyService, private CheckUserLogin: CheckUserLoginService ) {
    console.log(this.RequestDeKey());
    CheckUserLogin.checkUser();
   }

  dataStatusMass = [
    {name: 'Any', value: ''},
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
      this.ParseMasterKeyString();
    },100)
  }

  requestDetailsCancel(e){
    this.deKeyDetail = e;
  }

  requestDetailsSave(e){
    console.log("requstDetailsSave" + e)
    this.deKeyDetail = e;
    this.RequestDeKey();
  }

  ClickCreateDeKey(){
    this.deKeyDetail = {
      id: '0',
      keyRingId: '',
      keyId: '',
      version: '',
      masterKeyProvider: '',
      masterKeyConnectionString: '',
      expirationTime: '',
      status: '',
      description: '',
      pkcs11ConfigPath: '',
      pkcs11UserPin: '',
      pkcs11InstanceLabel: '',
      pkcs11CryptVector: '',
      awsKeyArn: '',
      awsAccessKeyId: '',
      awsSecretAccessKey: ''
    }

  }

  ParseMasterKeyString(){
    if(this.deKeyDetail.masterKeyConnectionString && this.deKeyDetail.masterKeyProvider == "PKCS11"){
      var res = this.deKeyDetail.masterKeyConnectionString.split("||");
      this.deKeyDetail.pkcs11ConfigPath = res[0];
      this.deKeyDetail.pkcs11UserPin = res[1];
      this.deKeyDetail.pkcs11InstanceLabel = res[2];
      this.deKeyDetail.pkcs11CryptVector = res[3];
    } else {
      if(this.deKeyDetail.masterKeyConnectionString && this.deKeyDetail.masterKeyProvider == "AWS"){
        var res = this.deKeyDetail.masterKeyConnectionString.split("||");
        this.deKeyDetail.awsKeyArn = res[0];
        this.deKeyDetail.awsAccessKeyId = res[1];
        this.deKeyDetail.awsSecretAccessKey = res[2];
      }
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
      console.log(data);   
      if(data.json().result) 
      {
        this.data = data.json().result;
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
        console.log("123 " + data);
      }
      else{
        this.data = [];
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        console.log(this.data);
      }
    });
  }

  ngOnInit() {
    this.GetData();
  }

  modelChanged(e){
    this.RequestDeKey();
  }

  pressBackspace(e, key){
    if(e.key == "Backspace"){
      this.dataRequestKeys[key] = '';
      this.RequestDeKey();
    }
  }

  modelChangedDate(e, key){
    console.log(e);
    if(typeof(e) != "string" && e != null){
      this.dataRequestKeys[key] = e.format("YYYY-MM-DD");
    }
    this.RequestDeKey();
  }
}
