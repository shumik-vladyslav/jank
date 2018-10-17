import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { VerifyService } from './verify.service';



@Injectable({
  providedIn: 'root'
})
export class CheckUserLoginService {

  constructor(private router: Router) {
  }

  checkUser(){
    if (!localStorage.getItem("user")) {
      this.router.navigate(['/login']);
    }
  }
}
