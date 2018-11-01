import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CheckUserLoginService {
  constructor(private router: Router, private authService: AuthService) {}

  pastUrl = null;

  prefixStorage = "set-prfix-local-";

  checkUser(pastUrl) {
    if (!this.authService.code) {
      this.pastUrl = pastUrl;
      // this.router.navigate(["/login"]);
      window.location.assign(
        "https://cwoauth2.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=6a6irnufprh9v325hll67ncafu&response_type=code&redirect_uri=http://localhost:4200/auth-callback&state=asdasdas&scope=openid&identity_provider=cognito"
      );
    }

    // if (!localStorage.getItem(this.prefixStorage + "user")) {
    //   this.pastUrl = pastUrl;
    //   this.router.navigate(["/login"]);
    // }
  }
}
