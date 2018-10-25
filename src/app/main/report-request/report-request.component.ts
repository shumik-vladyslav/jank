import { Component, OnInit } from '@angular/core';
import { VerifyService } from 'app/services/verify.service';
import { CheckUserLoginService } from 'app/services/check-user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-request',
  templateUrl: './report-request.component.html',
  styleUrls: ['./report-request.component.scss']
})
export class ReportRequestComponent implements OnInit {

  showSuccessMessage = false;
  showErrorMessage = false;
  agreeTerms;
  showError = false;

  constructor(private VerifyService: VerifyService, private CheckUserLogin: CheckUserLoginService,
    private router: Router) {
    CheckUserLogin.checkUser(this.router.url);
   }

  ngOnInit() {
  }

  submit(){
    let data = JSON.parse(localStorage.getItem(this.CheckUserLogin.prefixStorage +'user'));

    if (!this.agreeTerms){
      this.showError = true;
    } else if (JSON.parse(data._body).status === "Error"){
      console.log(data);
      this.showErrorMessage = true;
    } else if ( this.agreeTerms ){
      this.showSuccessMessage = true;
      this.showError = false;
    
      let data = JSON.parse(localStorage.getItem(this.CheckUserLogin.prefixStorage + 'user'));
      console.log(data);
      let id = JSON.parse(data._body).userId;

      this.VerifyService.CreateReportRequest(id).subscribe((data: any) => {
      });
    }
  }
}
