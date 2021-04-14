import { Component, Input, OnInit } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
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
@Input()
public childlist:UserCase[]=[];
  //@Output() notifyCreate: EventEmitter<CaseSchedule> = new EventEmitter<CaseSchedule>();
    constructor( private caseservice:CaseService) { }
  
    ngOnInit(): void {
       this.caseservice.getAll().subscribe(
       (res) =>{
          this.childlist = res;
         console.log(res);
        },
        (error) => console.log(error)
       )
    } 
    }

