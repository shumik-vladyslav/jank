import { Component, OnInit } from '@angular/core';
import { VerifyService } from 'app/services/verify.service';
import { CheckUserLoginService } from 'app/services/check-user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-operations',
  templateUrl: './verify-operations.component.html',
  styleUrls: ['./verify-operations.component.scss'],
})
export class VerifyOperationsComponent implements OnInit {

  // service;

  constructor( private verifyService: VerifyService, private CheckUserLogin: CheckUserLoginService,
    private router: Router) {
    this.init();
    CheckUserLogin.checkUser(this.router.url);
   }

  ngOnInit() {
    // this.service = this.verifyService  

    

  }

  items = [
    { viewValue: 'BigRing-BigKey-1.0', value: 'BigRing-BigKey-1.0' },
    { viewValue: 'BigRing-BigKey-2.0', value: 'BigRing-BigKey-2.0' },
    { viewValue: 'BigRing-BigKey-4.0', value: 'BigRing-BigKey-4.0' },
  ];

  types = [
    "",
    'DATE',
    'DATE_TIME',
    'PERSON_NAME',
    'PHONE_NUMBER',
    'IP_ADDRESS',
    'PERSON_NAME_NICE',
    'SSN',
    'CCNUM',
    'CURRENCY_AMOUNT',
    'UPC',
    'GPS',
    'STREET_ADDRESS',
    'STREET_ADDRESS_NICE',
    'EMAIL_ID',
    'MRN',
  ];
  encryptedData = {};
  decryptData = {};
  encryptRequestList = 
  {"requestCounter":15,
  
   "encryptRequestList":
  
       []
  
  }  

  decryptRequestList = 
  {"requestCounter":15,
  
   "decryptRequestList":
  
       []
  
  } 

  data = []
changeValue(){
  for(let item of this.encryptRequestList.encryptRequestList){
    item.keyContext = this.dropdown;
    item.sigId = this.SigId;
  }
  for(let item of this.decryptRequestList.decryptRequestList){
    item.keyContext = this.dropdown;
    item.sigId = this.SigId;
  }
}
  init(){
    for(let i = 1; i <= this.types.length; i ++){
      this.encryptRequestList.encryptRequestList.push(
        {"keyContext": this.dropdown,
      "inputValue":"",
      "type":this.types[i],
      "sigId":this.SigId,
      "correlationId":i});
    }

    for(let i = 1; i <= this.types.length; i ++){
      this.decryptRequestList.decryptRequestList.push(
        {"keyContext": this.dropdown,
      "inputValue":"",
      "type":this.types[i],
      "sigId":this.SigId,
      "correlationId":i});
    }

  
  }

  dropdown = "BigRing-BigKey-1.0";

  SigId = '123'

  serviceURI = 'http://cwpilotone.us-east-2.elasticbeanstalk.com/'
  changInput(){
 

    let arr = this.encryptRequestList.encryptRequestList.filter((valie) => {
      return valie.inputValue
    })
    console.log(this.encryptRequestList.encryptRequestList)
    // this.changeValue();
    this.cwBulkEncrypt(arr, true);
  }
  testFunc() {
    this.changeValue();
    this.cwBulkEncrypt(this.encryptRequestList.encryptRequestList);
    // this.cwBuldDecrypt();
  }
  reload = true;
  cwBulkEncrypt(arr, clear?){
    // this.reload = false;
    this.verifyService.getUrl(this.serviceURI + 
    'cwBulkEncrypt',  
    {"requestCounter":15,
  
    "encryptRequestList":
   
    arr
   
   } ).subscribe( (items:any) => {
      for(let item of items.cwResponseList){
        this.encryptedData[item.correlationId] = item.outputText;
        for(let i = 0; i < this.decryptRequestList.decryptRequestList.length; i++){
          console.log(this.decryptRequestList.decryptRequestList[i].correlationId,item.correlationId)
          if(+this.decryptRequestList.decryptRequestList[i].correlationId === +item.correlationId){
            this.decryptRequestList.decryptRequestList[i].inputValue = item.outputText
          }
        }
      }
      setTimeout(() => {
        if(clear){
          let arr = this.decryptRequestList.decryptRequestList.filter((valie) => {
            return valie.inputValue
          })
          this.cwBuldDecrypt(arr);
        } else {
          this.cwBuldDecrypt(this.decryptRequestList.decryptRequestList);

        }
      }, 1000);



    })
  }

  cwBuldDecrypt(arr){
    console.log(this.decryptRequestList);
    this.verifyService.getUrl(this.serviceURI + 
    'cwBulkDecrypt',   {"requestCounter":15,
  
    "decryptRequestList":
   
       arr
   
   }).subscribe( (items: any) => {
      console.log(items);
      for(let item of items.cwResponseList){
        this.decryptData[item.correlationId] = item.outputText;
      }
    })
  }

}
