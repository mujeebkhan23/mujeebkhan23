import { Component, Input, OnInit } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
import { CaseParties } from 'src/app/model/Parties';

@Component({
  selector: 'app-opponent-parties',
  templateUrl: './opponent-parties.component.html',
  styleUrls: ['./opponent-parties.component.css']
})
export class OpponentPartiesComponent implements OnInit {
 
  @Input() objparty: CaseParties = new CaseParties();
 // objUserCase: User = new UserCase;
  constructor() { }

  ngOnInit(): void {
  }

}
