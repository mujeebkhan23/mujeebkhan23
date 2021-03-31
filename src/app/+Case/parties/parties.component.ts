import { Component, OnInit } from '@angular/core';
import { CaseParties } from 'src/app/model/Parties';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {
  objUserCase: any;

  constructor() { }

  ngOnInit(): void {
    // let objparty=new CaseParties()
    // this.objUserCase.parties.push(objparty);
  }
  }


