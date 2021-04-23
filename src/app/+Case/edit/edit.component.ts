import { CaseParties } from 'src/app/model/Parties';

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
import { CaseService } from 'src/app/service/CaseService';
import { CaseSchedule } from 'src/app/model/CaseSchedule';
import { CaseNature } from 'src/app/model/CaseNature';

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
  public show: boolean = false;
  constructor(private PCaseservice: CaseService
  ) { }

  ngOnInit() {
    console.log(this.objcase);
    this.addSchedule();
  }
  addParty(partytype: string) {
    let par = {} as CaseParties;
    par.partyType = partytype;
    this.objcase.listParties.push(par);
    console.log(this.objcase.listParties);
  }
  onRemoveParty(rowIndex: number) {

    this.objcase.listParties.splice(rowIndex);

  }
  addSchedule() {
    let par = {} as CaseSchedule;
    par.court = "";
    this.objcase.listSchedule.push(par);
    console.log(this.objcase.listSchedule);
  }

  onSave() {
    if (this.objcase.id == 0) {
      this.notifyCreate.emit(this.objcase);
      this.objcase;
    }
    //  else{
    //    this.notifyUpdate.emit(this.objcase);   
    //      }

  }

  toggle() {
    this.show = !this.show;
  }
  onCancel() {
    this.objcase = new UserCase();
    this.notifyCancel.emit();
  }
}