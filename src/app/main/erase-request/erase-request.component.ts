import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erase-request',
  templateUrl: './erase-request.component.html',
  styleUrls: ['./erase-request.component.scss']
})
export class EraseRequestComponent implements OnInit {

  showSuccessMessage = false;
  agreeTerms;
  understund;
  showError = false;

  constructor() { }

  ngOnInit() {
  }
  checkValue(event: any){
    console.log(event);
  }
  submit(){
    if (!this.agreeTerms || !this.understund){
      this.showError = true;
    } else if ( this.agreeTerms && this.understund ){
      this.showSuccessMessage = true;
      this.showError = false;
    }
  }
}
