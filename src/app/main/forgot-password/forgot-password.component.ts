import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { VerifyService } from '../../services/verify.service';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm: FormGroup;

  /**
   * Constructor
   *
   *@param {FuseConfigService} _fuseConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
      private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private VerifyServise: VerifyService,
    private router: Router,
  ) {
    // Configure the layout
      this._fuseConfigService.config = {
          layout: {
              navbar   : {
                  hidden: true
              },
              toolbar  : {
                  hidden: true
              },
              footer   : {
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
    this.forgotPassForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  errorMessege = false;
  successMessege = false;

  data = {
    user: ''
  }



  chengePass() {

    if (this.forgotPassForm.valid) {
      this.VerifyServise.forgetPass(this.data.user).subscribe((data: any) => {
        console.log(data);
        if (data.status === 200) {
          this.router.navigateByUrl('/login');
          this.successMessege = false;
        } else {
          this.errorMessege = true;
        }
      }, ()=>{
        this.errorMessege = true;
      });
    } else{
      this.errorMessege = true;
    }
  }
}
