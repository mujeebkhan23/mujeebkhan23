import { User } from './../model/security.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { securityService } from '../service/security';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = new User();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: securityService
  ) {}

  ngOnInit() {
    // reset login status
    //this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  login() {
    this.authenticationService
      .login(this.user.username, this.user.password)
      .subscribe((c) => {
        console.log(c);
        if (c.data.accessToken != null) {
          this.router.navigate(['/app']);
        }
      });
  }
}
