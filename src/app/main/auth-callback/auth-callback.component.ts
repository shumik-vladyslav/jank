import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {
  sub;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { 
  }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.authService.code = params.code;
      this.router.navigateByUrl('/');
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
