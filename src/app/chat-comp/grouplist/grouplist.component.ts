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
          console.log('Group Data Saved');
        },
        (error) => {
          console.log('Group Data could not be saved');
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
DeleteGroup(objgroup:Groups){
  this.chatservice.DeleteGroup(objgroup.id)
  .subscribe(res=>{
    this.getData();
    console.log("Group delete successfully!")
  },error=>{
    this.getData();
  }
  
  )

}
}
