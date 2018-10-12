import { Component, OnInit, ViewChild } from '@angular/core';
import { VerifyService } from '../../services/verify.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-sensitive-data-inventory',
  templateUrl: './sensitive-data-inventory.component.html',
  styleUrls: ['./sensitive-data-inventory.component.scss']
})
export class SensitiveDataInventoryComponent implements OnInit {

  constructor(private VerifyService: VerifyService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSensetive = {
    minId : '1',
    recordCount : '100000',
    // sigId : '',
    // status : '',
    // keyRingId : '',
    // keyId : '',
    // version : '',
    // keyContext : '',
    // createDateBegin : '',
    // createDateEnd : '',
    // updateDateBegin : '',
    // updateDateEnd : '',
    // expirationDateBegin : '',
    // expirationDateEnd : ''
  }

  displayedColumns: string[] = ['tweakId', 'keyContext', 'createTime', 'updateTime', 'expirationTime', 'status', 'comment','empty'];
  
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
  data = [];

  GetDataSensetive(){
    this.VerifyService.GetSensetiveDataSummary(this.dataSensetive).subscribe((data:any)=> {
      console.log(data);
      if(data._body){
        this.data = data.json();
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        console.log(this.data);
      }
    })
  }
  
  ngOnInit() {
    this.GetDataSensetive();
  }

}
