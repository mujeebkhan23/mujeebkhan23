import { ChatService } from './../../service/chat.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Groups } from 'src/app/model/groups';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {

  public listgroup: Groups[]=[];

  constructor( private chatservice:ChatService) { }
  ngOnInit(): void {
    this.getData();
    
  }

  @Output()
  notifyGroup:EventEmitter<Groups> = new EventEmitter<Groups>();
  onSelectGroup(listgroup: Groups): void {
      this.notifyGroup.emit(listgroup);
  } 
   //get all records
getData():void {
  this.chatservice.getAllgroups().subscribe(res => {
      this.listgroup= res.data;
console.log(res.data)
  }, error => console.log(error));
}

}
