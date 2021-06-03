import { Component, Input, OnInit } from '@angular/core';
import { CaseHistory } from 'src/app/model/CaseHistory';

@Component({
  selector: 'form-case-history',
  templateUrl: './case-history.component.html',
  styleUrls: ['./case-history.component.css']
})
export class CaseHistoryComponent implements OnInit {
@Input() casehistory: CaseHistory= new CaseHistory();

  constructor() { }

  ngOnInit(): void {
    console.log(this.casehistory)
  }

}
