import { CaseParties } from 'src/app/model/Parties';

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
import { CaseService } from 'src/app/service/CaseService';
import { CaseSchedule } from 'src/app/model/CaseSchedule';
import { CaseNature } from 'src/app/model/CaseNature';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';
import { CaseClause } from 'src/app/model/CaseClause';
import { CaseHistory } from 'src/app/model/CaseHistory';
import { OpponentLawyer } from 'src/app/model/OpponentLawyer';

@Component({
  selector: 'app-Caseedit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() objcase: UserCase = new UserCase;
  @Output() notifyCreate: EventEmitter<UserCase> = new EventEmitter<UserCase>();
  @Output() notifyupdate: EventEmitter<UserCase> = new EventEmitter<UserCase>();
  @Output() notifyCancel: EventEmitter<any> = new EventEmitter();
  objcasenature: any = CaseNature;
  // public show: boolean = false;
  constructor(private PCaseservice: CaseService
  ) { }

  ngOnInit() {
    console.log(this.objcase);
    this.addSchedule();
    //  this.addNature();
    //  this.addClause();
    //  this.addHistory();
  }
  addParty(partytype: string) {
    let par = {} as CaseParties;  
    par.partyType = partytype;
    par.name="";
    this.objcase.listParties.push(par);
  let Party1="";
  let Party2="";

  for(var item of this.objcase.listParties )
  {
     if(item.partyType=="FirstParty")
     {
      Party1=Party1+item.name;
     }
     else
     {
      Party2=Party2+item.name;
     }
  }
  this.objcase.caseTitle= (Party1); // + Party2;
  this.objcase.caseTitle=this.objcase.caseTitle.concat( " VS ").concat(Party2);
 
}
  //forremove
  onRemoveParty(rowIndex: number) {

    this.objcase.listParties.splice(rowIndex, 1);
  }

  addOpponentLawyer() {
    let par = {} as OpponentLawyer;
    par.courtAddress = "";
    this.objcase.listOpponentLawyer.push(par);
    console.log(this.objcase.listOpponentLawyer);
  }
  onRemoveOpponentLawyer(rowIndex: number) {

    this.objcase.listOpponentLawyer.splice(rowIndex, 1);

  }
  addSchedule() {
    let par = {} as CaseSchedule;
    par.court = "";
    this.objcase.listSchedule.push(par);
    console.log(this.objcase.listSchedule);
  }
  onRemoveSchedule(rowIndex: number) {

    this.objcase.listSchedule.splice(rowIndex, 1);

  }
  addNature() {
    let par = {} as CaseNature;
    par.name = "";
    this.objcase.listCaseNature.push(par);
    console.log(this.objcase.listCaseNature);
  }

  addClause() {
    let par = {} as CaseClause;
    par.title = "";
    this.objcase.listClauses.push(par);
    console.log(this.objcase.listClauses);
  }
  addHistory() {
    let par = {} as CaseHistory;
    par.decision = "";
    this.objcase.listHistory.push(par);
    console.log(this.objcase.listHistory);
  }
  onSave() {
    if (this.objcase.id == 0) {
      this.notifyCreate.emit(this.objcase);
      this.objcase;
    }
    else {
      this.notifyupdate.emit(this.objcase);
    }
  }
  onSelect(objcasenature: CaseNature): void {

    this.objcasenature = objcasenature;
  }
  onCancel() {
    this.objcase = new UserCase();
    this.notifyCancel.emit();
  }
}


