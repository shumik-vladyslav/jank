import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';
import { VerifyService } from '../../services/verify.service';
import { CheckUserLoginService } from 'app/services/check-user-login.service';

@Component({
    selector: 'app-sing-in',
    templateUrl: './sing-in.component.html',
    styleUrls: ['./sing-in.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class SingInComponent implements OnInit {
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */

    showMessSucReg = false;

    data = {
        user: '',
        password: '',
    }

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private VerifyServise: VerifyService,
        private CheckUserLogin: CheckUserLoginService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };


    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

    linkForgotPass(){
        this.router.navigateByUrl('/forget-pass');
    }

    ngOnInit(): void {

        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    get email(): any { return this.loginForm.get('email'); }
    get password(): any { return this.loginForm.get('password'); }


    clearFilds() {
        this.email.reset(); this.password.reset();
    }

    errorMessage = false;
    errorMess = ""
    prefixKey;
    singIn() {
        if (this.loginForm.valid) {
            this.VerifyServise.singIn(this.data.user, this.data.password).subscribe((data: any) => {
                console.log(data);
                if (data.status === 200) {
                    localStorage.setItem(this.CheckUserLogin.prefixStorage + 'user', JSON.stringify(data));
                    if(this.CheckUserLogin.pastUrl == null){
                        this.router.navigateByUrl('/verify-operations');
                    } else {
                        this.router.navigateByUrl(this.CheckUserLogin.pastUrl);
                    }
                } else if (data.status === "ChangePassword") {
                    this.router.navigateByUrl('/change-pass');
                } else {
                    this.errorMessage = true;
                }

            },(data) => {
                this.errorMessage = true;
                console.log(data)
                this.errorMess = data.json()['message'];
            });
        } else{
            this.errorMessage = true;
        }
    }

    goToRegister(){
        this.router.navigateByUrl('/register');
    }
}
