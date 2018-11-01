import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  constructor(private authService: AuthService) { 
    this.authService.signOut();
    window.location.assign('https://cwoauth2.auth.us-east-2.amazoncognito.com/logout?client_id=6a6irnufprh9v325hll67ncafu&logout_uri=http://localhost:4200/&state=asdasdas&scope=openid&identity_provider=cognito');
  }

  ngOnInit() {
  }

}
