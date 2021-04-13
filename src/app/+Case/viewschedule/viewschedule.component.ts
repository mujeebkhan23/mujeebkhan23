import { Component, Input, OnInit } from '@angular/core';
import { CaseSchedule } from 'src/app/model/CaseSchedule';
import { CaseService } from 'src/app/service/CaseService';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.css']
})
export class ViewscheduleComponent implements OnInit {

  @Input() 
  public ObjSchedule: CaseSchedule= new CaseSchedule();

  //@Output() notifyCreate: EventEmitter<CaseSchedule> = new EventEmitter<CaseSchedule>();
    constructor( private caseservice:CaseService) { }
  
    ngOnInit(): void {
      // this.caseservice.getAll().subscribe(
      //   (res) =>{
      //     this.ObjSchedule = res;
      //     console.log(this.ObjSchedule);
      //   }
      // )

      }
    
         
    }

