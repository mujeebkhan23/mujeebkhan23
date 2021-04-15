import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {

  public myUserName:string="";

  ngOnInit() {
    this.myUserName=  JSON.parse(localStorage.getItem('UserName') || '{}');
            }
    }
