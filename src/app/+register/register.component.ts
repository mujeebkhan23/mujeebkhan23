import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/security.model';
import { securityService } from '../service/security';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:User= new User();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: securityService) {}

    register()
    {
      this.user.username=this.user.email;
      this.authenticationService.register(this.user).subscribe(c=>{
        console.log(c);
        this.router.navigate(['/login']);
      });
    }

}
