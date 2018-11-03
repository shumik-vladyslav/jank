import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/services/auth.service";

@Component({
    selector: "app-auth-callback",
    templateUrl: "./auth-callback.component.html",
    styleUrls: ["./auth-callback.component.scss"]
})
export class AuthCallbackComponent implements OnInit {
    sub;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(params => {
            this.authService.code = params.code;

            let headers = new HttpHeaders();
            headers = headers.set(
                "Content-Type",
                "application/x-www-form-urlencoded"
            );

            // CLIENT ID AND SECRET
            // If commented, all does not work
            headers = headers.set(
                "Authorization",
                `Basic ${window.btoa(
                    "6a6irnufprh9v325hll67ncafu:81i88lubiokb4rihlvsu6c5ev7aicjo0a74rdq2gpmalmsmquts"
                )}`
            );

            let httpParams = new HttpParams()
                .append("grant_type", "authorization_code")
                .append("client_id", "6a6irnufprh9v325hll67ncafu")
                .append("code", params.code)
                .append("code_verifier", 'M25iVXpKU3puUjFaYWg3T1NDTDQtcW1ROUY5YXlwalNoc0hhakxifmZHag')
                .append("redirect_uri", 'http://localhost:4200/auth-callback')

            this.http
                .post(
                    "https://cwoauth2.auth.us-east-2.amazoncognito.com/oauth2/token",
                    httpParams,
                    { headers: headers }
                )
                .subscribe(
                    (res:any) => {
                        console.log(res);
                        localStorage.removeItem('chipher_works_start');
                        localStorage.setItem('chipher_works_access_token',res.access_token);
                        localStorage.setItem('chipher_works_id_token',res.id_token);
                        localStorage.setItem('chipher_works_refresh_token',res.refresh_token);
                    },
                    err => console.log(err)
                );
            this.router.navigateByUrl("/");
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
