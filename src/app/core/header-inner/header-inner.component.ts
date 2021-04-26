import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {

  public myUserName:string="";
public url:string="";
  ngOnInit() {
    this.myUserName=  JSON.parse(localStorage.getItem('UserName') || '{}');
    this.url=  JSON.parse(localStorage.getItem('FilePath') || '{}');

            }
    }
