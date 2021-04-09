import { License } from './../../model/license.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lawyerlicense',
  templateUrl: './lawyerlicense.component.html',
  styleUrls: ['./lawyerlicense.component.css']
})
export class LawyerlicenseComponent implements OnInit {

@Input() objLic : License=new License(); 
  constructor() { }

  ngOnInit(): void {
  }

}
