import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-left-inner',
  templateUrl: './sidebar-left-inner.component.html'
})
export class SidebarLeftInnerComponent {

  public myUserName:string=""
  url:any;
ngOnInit(){
    this.myUserName=  JSON.parse(localStorage.getItem('UserName') || '{}');
    this.url=localStorage.getItem('ImageURL');

  }
}
 
