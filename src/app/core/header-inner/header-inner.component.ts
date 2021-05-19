import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { securityService } from 'src/app/service/security';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {

  public myUserName: string = "";
  public url: any;
  ngOnInit() {
    this.myUserName = JSON.parse(localStorage.getItem('UserName') || '{}');
    this.url = localStorage.getItem('ImageURL');

  }
  constructor(
    private router: Router,
     private authenticationService: securityService){}
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
