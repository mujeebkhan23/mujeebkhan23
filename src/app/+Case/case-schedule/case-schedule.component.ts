import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CaseSchedule } from 'src/app/model/CaseSchedule';

@Component({
  selector: 'app-case-schedule',
  templateUrl: './case-schedule.component.html',
  styleUrls: ['./case-schedule.component.css']
})
export class CaseScheduleComponent implements OnInit {
@Input() ObjSchedule: CaseSchedule= new CaseSchedule();

//@Output() notifyCreate: EventEmitter<CaseSchedule> = new EventEmitter<CaseSchedule>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.ObjSchedule);
    
  }

  
  
  // onSave() {
  //   if(this.ObjSchedule.id==0){
  //     this.notifyCreate.emit(this.ObjSchedule);
  //    }
    //  else{
    //    this.notifyUpdate.emit(this.objcase);   
    //      }
        
  }

