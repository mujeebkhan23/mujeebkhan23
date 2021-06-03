import { Lawyer } from './../../model/lawyer.model';
import { Component, Inject, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { lawyerProfileService } from 'src/app/service/lawyerprofile.service';
@Component({
  selector: 'app-list2',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
 @Input()
  Lawyerlist: Lawyer[] = [];
  disableControlList: null;
  // @Input() disableControlList: IlkptAdjustment[];
  constructor(  
       private lprofileService: lawyerProfileService
       ) { }
    ngOnInit() {
        this.lprofileService.getAll().subscribe(res => {
            this.Lawyerlist= res;
            console.log(res);
        }, error => console.log(error));
         }
 
//     record(per:Client)
// {
//   //this.objPerson=per;
//   this.newItemEvent.emit(per);
// }

//     onSave(ownerpartner: Client): void {
//         let item = new Client();
//         this.listClient.push(item);
//     }
    @Output() newItemEvent = new EventEmitter<Lawyer>();
    @Output()
    notifySelect: EventEmitter<Lawyer> = new EventEmitter<Lawyer>();
    onSelect(ownerpartner: Lawyer): void {
        this.notifySelect.emit(ownerpartner);
    }
    @Output()
    notifyshowedit:EventEmitter<Lawyer> = new EventEmitter<Lawyer>();
    showedit(){
     this.notifyshowedit.emit();
       
    }
    @Output()
    notifyDelete: EventEmitter<Lawyer> = new EventEmitter<Lawyer>();
    onDelete(ownerpartner: Lawyer): void {
        this.notifyDelete.emit(ownerpartner);
    }

}
