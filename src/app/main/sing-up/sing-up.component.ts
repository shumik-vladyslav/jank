import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class SingUpComponent implements OnInit, OnDestroy   {
  registrationForm: FormGroup;

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
      private _fuseConfigService: FuseConfigService,
      private _formBuilder: FormBuilder,
      private router: Router

  )
  {
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
  ngOnInit(): void
  {
      this.registrationForm = this._formBuilder.group({
          email   : ['', [Validators.required, Validators.email]],
          name: ['', Validators.required]
      });
  }

  get email(): any { return this.registrationForm.get('email'); }
  get name(): any { return this.registrationForm.get('name'); }


  clearFilds(){
    this.email.reset(); this.name.reset();
  } 

  errorMessege = false;
  
  errorControl(){
    if ( this.registrationForm.invalid ){
      this.errorMessege = true;
    }
    if ( this.registrationForm.valid ){
        this.router.navigateByUrl('/change-pass');
    }
  }
    registerClose;
    ngOnDestroy() { 
        this.registerClose = true;
    }

}
