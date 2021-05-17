import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {

  public myUserName:string="";
public url:any;
  ngOnInit() {
    this.myUserName=  JSON.parse(localStorage.getItem('UserName') || '{}');
    this.url=localStorage.getItem('ImageURL');


            }
    }
