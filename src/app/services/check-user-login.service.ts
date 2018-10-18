import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { VerifyService } from './verify.service';



@Injectable({
  providedIn: 'root'
})
export class CheckUserLoginService {

  constructor(private router: Router) {
  }

  prefixStorage = "set-prfix-local-";

  checkUser(){
    if (!localStorage.getItem(this.prefixStorage + "user")) {
      this.router.navigate(['/login']);
    }
  }
}
