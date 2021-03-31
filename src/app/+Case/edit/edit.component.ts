
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
import { CaseService } from 'src/app/service/CaseService';

@Component({
  selector: 'app-Caseedit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

@Input() objcase: UserCase = new UserCase;
@Output() notifyCreate: EventEmitter<UserCase> = new EventEmitter<UserCase>();
@Output() notifyupdate: EventEmitter<UserCase>=new EventEmitter<UserCase>();
@Output()notifyCancel: EventEmitter<any>=new EventEmitter();
constructor(private PCaseservice:CaseService
  ) { }

ngOnInit() {

  // load any lookup type data for dropdown
  // this.srvlkptCountriesService.GetAll().subscribe(res => {
  //     this.listlkptCountries = res;
  // }, error => console.log(error));
  // this.srvRegistrationService.GetAll().subscribe(res => {
  //     this.listRegistration = res;
  // }, error => console.log(error));
}
// ngOnChanges(changes: SimpleChanges) {
//   if (changes.objchild && !changes.objchild.isFirstChange()) {
//       // exteranl API call or more preprocessing...
//       this.objchild = changes.objchild.currentValue;
//   }

  //for (let propName in changes) {
  //    let change = changes['objOwnerPartner'];
  //    this.objOwnerPartner = change.currentValue;
  //    //if (change.isFirstChange()) {
  //    //    this.objOwnerPartner = change.currentValue;
  //    //} else {
  //    //    console.log('no change in data')
  //    //}
  //}
//}
onSave()
{
  if(this.objcase.id==0)
  {
  this.notifyCreate.emit(this.objcase);
  }
  else {
    this.notifyupdate.emit(this.objcase);
  }
}

onCancel() {
this.objcase=new UserCase();
this.notifyCancel.emit();
}
}