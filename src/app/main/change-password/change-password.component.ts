import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';
import { VerifyService } from '../../services/verify.service';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ChangePasswordComponent implements OnInit {
    changePassForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private VerifyServise: VerifyService,
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
    ngOnInit(): void {
        this.changePassForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            newPassword: ['', [Validators.required,Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}")]],
            oldPassword: ['', [Validators.required]]
        });
    }

    errorMessege = false;

    data = {
        email: '',
        oldPassword: '',
        newPassword: ''
    }
    errorControl() {
        if (this.changePassForm.invalid) {
            this.errorMessege = true;
        } else {
            this.VerifyServise.changePass(this.data.email, this.data.oldPassword, this.data.newPassword)
            .subscribe((data: any) => {
                console.log(data);
                if (data.status === 200) {
                    this.router.navigateByUrl('/login');
                } else {
                    this.errorMessege = true;
                }
            }, () => {
                console.log(2323)
                this.errorMessege = true;
            });
            this.errorMessege = false;
        }
    }

    get email(): any { return this.changePassForm.get('email'); }
    get oldPassword(): any { return this.changePassForm.get('oldPassword'); }
    get newPassword(): any { return this.changePassForm.get('newPassword'); }


    clearFilds() {
        this.email.reset(); this.oldPassword.reset(); this.newPassword.reset();
    }

}
