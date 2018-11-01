import { Component, OnInit, ViewChild } from '@angular/core';
import { VerifyService } from '../../services/verify.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { CheckUserLoginService } from 'app/services/check-user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sensitive-data-inventory',
  templateUrl: './sensitive-data-inventory.component.html',
  styleUrls: ['./sensitive-data-inventory.component.scss']
})
export class SensitiveDataInventoryComponent implements OnInit {

  constructor(private VerifyService: VerifyService, private CheckUserLogin: CheckUserLoginService,
    private router: Router) { 
    console.log(this.GetDataSensetive());
    CheckUserLogin.checkUser(this.router.url);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSensetive = {
    minId : '1',
    recordCount : '100000',
    sigId : '',
    status : '',
    keyRingId : '',
    keyId : '',
    version : '',
    keyContext : '',
    createDateBegin : '',
    createDateEnd : '',
    updateDateBegin : '',
    updateDateEnd : '',
    expirationDateBegin : '',
    expirationDateEnd : '',
    comment: ''
  }
  
  sensetiveNote = {
    comment : '',
    sigId : '' 
  }

  displayedColumns: string[] = ['sigId', 'keyContext', 'createTime', 'updateTime', 'expirationTime', 'status', 'comment','empty'];
  
  dataStatusMass = [
    {name: 'Any', value: ''},
    {name: 'Inactive', value: 0},
    {name: 'Active', value: 1}
  ]

  dataStatus = {
    0: "Inactive",
    1: "Active"
  }

  dataSource;
  data = [];

  ClickAddNote(comment, sigId){
    this.sensetiveNote.comment = comment;
    this.sensetiveNote.sigId = sigId;
    this.VerifyService.AddCommentToSigId(this.sensetiveNote).subscribe((data:any)=> {
      console.log(data);
    });
    setTimeout(()=>{
      this.GetDataSensetive();
    },500);
  }

  ClickEraseNote(comment, sigId){
    this.sensetiveNote.comment = comment;
    this.sensetiveNote.sigId = sigId;
    console.log(this.sensetiveNote);
    this.VerifyService.FogetSigId(this.sensetiveNote).subscribe((data:any) => {
      console.log(data);
    });
    setTimeout(()=>{
      this.GetDataSensetive();
    },500);
  }

  firstRunTime = Date.now();
  GetDataSensetive(){
    if ((Date.now() - this.firstRunTime ) < 300)  return;

     this.firstRunTime = Date.now();
     this.GetData();
  }


  GetData(){
    this.VerifyService.GetSensetiveDataSummary(this.dataSensetive).subscribe((data:any)=> {
      console.log(data);
      if(data._body){
        this.data = data;
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        console.log(this.data);
      }
      else{
        this.data = [];
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        console.log(this.data);
      }
    })
  }
  
  modelChanged(e){
    this.GetDataSensetive();
  }

  pressBackspace(e, key){
    if(e.key == "Backspace"){
      this.dataSensetive[key] = '';
      this.GetDataSensetive();
    }
  }

  modelChangedDate(e, key){
    console.log(e);
    if(typeof(e) != "string" && e != null){
      this.dataSensetive[key] = e.format("YYYY-MM-DD");
    }
    this.GetDataSensetive();
  }

  ngOnInit() {
    this.GetData();
  }

}
