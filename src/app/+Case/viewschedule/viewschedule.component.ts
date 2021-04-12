import { Component, Input, OnInit } from '@angular/core';
import { CaseSchedule } from 'src/app/model/CaseSchedule';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.css']
})
export class ViewscheduleComponent implements OnInit {

  @Input() ObjSchedule: CaseSchedule= new CaseSchedule();

  //@Output() notifyCreate: EventEmitter<CaseSchedule> = new EventEmitter<CaseSchedule>();
    constructor() { }
  
    ngOnInit(): void {
      console.log(this.ObjSchedule);
    
    }          
    }

