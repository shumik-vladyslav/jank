import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private _code: string;
    public set code(v: string) {
        localStorage.setItem("chipher_works_code", v);
        this._code = v;
    }

    public get code(): string {
        return this._code;
    }

    constructor() {
        this._code = localStorage.getItem("chipher_works_code");
    }

    public signOut() {
        localStorage.removeItem("chipher_works_code");
    }

    public verifyCallback() {

    }

    public getSignInLink() {
        let state;
        let code_challenge;
        if (localStorage.getItem('chipher_works_start')){
          state = localStorage.getItem('chipher_works_state');
          code_challenge = localStorage.getItem('chipher_works_code_challenge');
        } else {
          state = this.makeRandomStr(6);
          code_challenge = "qjrzSW9gMiUgpUvqgEPE4_-8swvyCtfOVvg55o5S_es";
          localStorage.setItem('chipher_works_start', "true")
          localStorage.setItem('chipher_works_state', state)
          localStorage.setItem('chipher_works_code_challenge',code_challenge)
        }

        const res = `https://cwoauth2.auth.us-east-2.amazoncognito.com/oauth2/authorize?client_id=6a6irnufprh9v325hll67ncafu&response_type=code&redirect_uri=http://localhost:4200/auth-callback&scope=openid&identity_provider=cognito&state=${state}&code_challenge_method=S256&code_challenge=${code_challenge}`;
        console.log('get sign in link', res);
        return res;
    }

    private makeRandomStr(size) {
        var text = "";
        var possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < size; i++)
            text += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );

        return text;
    }
}
