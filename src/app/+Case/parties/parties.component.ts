import { Component, Input, OnInit } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
import { CaseParties } from 'src/app/model/Parties';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
  //objUserCase: any;
  //objUserCase: any;
  @Input()
  objUserCase: UserCase = new UserCase;
  constructor() { }

  ngOnInit(): void {
    // let objparty=new CaseParties()
    // this.objUserCase.parties.push(objparty);
  }
  }


