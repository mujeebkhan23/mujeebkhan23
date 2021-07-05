import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
      if(this.user.password === this.user.confirmpassword)
      {
      
      this.user.username=this.user.email;
      this.authenticationService.register(this.user).subscribe(c=>{
        console.log(c);
        
        this.router.navigate(['/login']);
      });
    }
    else{
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Password And Confirm Password Did not match.',
        timer: 3500,
        width:'50rem',
        padding: '3rem',
      })
      // alert("Your Password is not match");
    }
    }

}
