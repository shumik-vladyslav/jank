import { Component, OnInit } from '@angular/core';
import { VerifyService } from 'app/services/verify.service';

@Component({
  selector: 'app-verify-operations',
  templateUrl: './verify-operations.component.html',
  styleUrls: ['./verify-operations.component.scss'],
})
export class VerifyOperationsComponent implements OnInit {

  // service;

  constructor( private verifyService: VerifyService) { }

  ngOnInit() {
    // this.service = this.verifyService  

    

  }

  items = [
    { viewValue: 'KeyRingId1-KeyId1-1.0', value: 'RingId1-KeyId1' },
    { viewValue: 'KeyRingId1-KeyId2-1.0', value: 'RingId1-KeyId2' },
    { viewValue: 'KeyRingId2-KeyId1-1.0', value: 'RingId2-KeyId1' },
    { viewValue: 'KeyRingId2-KeyId2-1.0', value: 'RingId2-KeyId2' },
  ];

  serviceURI = 'http://cwpilotone.us-east-2.elasticbeanstalk.com/'

  testFunc() {
    console.log('shashki', this.serviceURI)
    this.verifyService.getUrl(this.serviceURI).subscribe( items => {
      console.log(items)
      
    })
  }

}
