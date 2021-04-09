import { ChatService } from './../../service/chat.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Groups } from 'src/app/model/groups';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {

  public listgroup: Groups[]=[];
  public objgroup: Groups= new Groups();

  constructor( private chatservice:ChatService, private toastr:ToastrService) { }
  ngOnInit(): void {
    this.getData();
 
  }

  @Output()
  notifyGroup:EventEmitter<Groups> = new EventEmitter<any>();
  onGroupSelection(groupId:number): void {
      this.notifyGroup.emit(groupId);
  } 
  //save groups
  SaveGroup(objgroup: Groups): void {
    if ( this.objgroup.id == 0) {
  
      this.chatservice.createGroup(objgroup).subscribe(
        (res) => {
          this.getData();
         // this.toastr.success('Message Sent successfully', 'Message');
          console.log('Group Data Saved');
          console.log(this.objgroup)
        },
        (error) => {
          console.log('Group Data could not be saved');
         // this.toastr.error('Error', "User Profile Data Couldn't Save");
          console.log(error);
        }
      );

     this.objgroup = new Groups();
    }
    
  }
   //get all records
getData():void {
  this.chatservice.getAllgroups().subscribe(res => {
      this.listgroup= res;
console.log(res)
  }, error => console.log(error));
}

}
