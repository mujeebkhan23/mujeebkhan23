import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Affiliation } from 'src/app/model/affiliation.model';

@Component({
  selector: 'lawyeraffiliation',
  templateUrl: './lawyeraffiliation.component.html',
  styleUrls: ['./lawyeraffiliation.component.css']
})
export class LawyeraffiliationComponent implements OnInit {

  @Input() objAff: Affiliation=new Affiliation();
 
//  @Input() objAff:  Affiliation[]=[];

  constructor() 
  { 
  }

  ngOnInit(): void {
    
  }
  

}
