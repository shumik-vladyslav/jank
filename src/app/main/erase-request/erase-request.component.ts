import { Component, OnInit } from '@angular/core';
import { VerifyService } from 'app/services/verify.service';
import { CheckUserLoginService } from 'app/services/check-user-login.service';

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

  constructor(private VerifyService : VerifyService, private CheckUserLogin: CheckUserLoginService) {
    CheckUserLogin.checkUser();
   }

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

      let data = JSON.parse(localStorage.getItem(this.CheckUserLogin.prefixStorage +'user'));
      console.log(data);
      let id = JSON.parse(data._body).userId;

      this.VerifyService.CreateEraseRequest(id).subscribe((data: any) => {
      });
    }
  }
}
