import { Injectable } from '@angular/core';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CheckUserLoginService {

  constructor(private router: Router) {
  }

  pastUrl = null;

  prefixStorage = "set-prfix-local-";

  checkUser(pastUrl){
    if (!localStorage.getItem(this.prefixStorage + "user")) {
      this.pastUrl = pastUrl;
      this.router.navigate(['/login']);
    }
  }
}
