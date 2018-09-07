import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-request',
  templateUrl: './report-request.component.html',
  styleUrls: ['./report-request.component.scss']
})
export class ReportRequestComponent implements OnInit {

  showSuccessMessage = false;
  agreeTerms;
  showError = false;

  constructor() { }

  ngOnInit() {
  }
  submit(){
    if (!this.agreeTerms){
      this.showError = true;
    } else if ( this.agreeTerms ){
      this.showSuccessMessage = true;
      this.showError = false;
    }
  }
}
