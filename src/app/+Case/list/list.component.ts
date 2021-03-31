
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
import { CaseService } from 'src/app/service/CaseService';

@Component({
  selector: 'app-Caselist',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 @Input()
 public childlist: UserCase[] = [];
// @Input() disableControlList: IlkptAdjustment[];

constructor( private PCaseService:CaseService) { }

ngOnInit(): void {
  this.PCaseService.getAll().subscribe(res => {
    console.log(res);
      this.childlist= res.data;
  }, error => console.log(error));
}
//   IsDisable(fieldName: string) {
//     if (this.disableControlList == null) { return false; }
//     if (this.disableControlList.find(c => c.AdjustmentField == fieldName)) { return false; }
//     else { return true; }

// // }
// ngOnChanges(changes: SimpleChanges) {
//   if (changes.  childlist && !changes.  childlist.isFirstChange()) {
//       // exteranl API call or more preprocessing...
//       this.  childlist = changes.  childlist.currentValue;
//   }
// }

onSave(Usercase: UserCase): void {
  let item = new UserCase();
  this.  childlist.push(item);
}
@Output()
notifySelect: EventEmitter<UserCase> = new EventEmitter<UserCase>();
onSelect(usercase: UserCase): void {
  this.notifySelect.emit(usercase);
}
@Output()
notifyDelete: EventEmitter<UserCase> = new EventEmitter<UserCase>();
onDelete(usercase: UserCase): void {
  this.notifyDelete.emit(usercase);
}

 @Output()
 notifyshowedit:EventEmitter<UserCase> = new EventEmitter<UserCase>();
 showedit(usercase: UserCase){
  this.notifyshowedit.emit();
    
 }
} 
