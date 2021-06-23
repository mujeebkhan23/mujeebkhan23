import { ChatService } from './../../service/chat.service';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Chat } from 'src/app/model/chat';
import { MessageService } from 'src/app/service/intermsgsrv';
import { Subscription } from 'rxjs';
import { GroupMembers } from 'src/app/model/groupMembers';
import { GroupMemberVm } from 'src/app/model/groupMemberVm';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Groups } from 'src/app/model/groups';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.css']
})
export class ListChatComponent implements OnInit,OnChanges {
  public listgroupMembers: GroupMembers[]=[];
  public objgroupMember: GroupMemberVm= new GroupMemberVm();
  public activeGroupId: number = 0;
  public listgroup: Groups[]=[];
  @Input()
  public listchildchat: Chat[] = [];

  public myUserId:string="";
  @ViewChild('closebutton') closebutton:any;
  public profileImage:any;

  @ViewChild('scrollMe')
  private myScrollContainer!: ElementRef;

  constructor(private chatservice: ChatService,private cdref: ChangeDetectorRef) { }
  
  ngOnInit() {
   this.getMembersData();
   this.getData();
    
this.myUserId=  JSON.parse(localStorage.getItem('UserId') || '{}');
this.profileImage=JSON.parse(localStorage.getItem('ImagePath') || '{}');

this.scrollToBottom();

        }
        ngAfterContentChecked() {
          this.cdref.detectChanges();
          this.scrollToBottom();
           }

      scrollToBottom(): void {
          try {
              this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollTop

          } catch(err) { }                 
      }

        ngOnChanges(changes: SimpleChanges) {
          if (changes.listchildchat && !changes.listchildchat.isFirstChange()) {
              // exteranl API call or more preprocessing...
              this.listchildchat = changes.listchildchat.currentValue;
         
            }
        
      }
        // ngOnChanges(changes: SimpleChanges) {
        //   changes.listchildchat;
        
        //}
        // trackByFn(index:any) {
        //   return index; // or item.id
        // }
@Output()
notifySelect:EventEmitter<Chat> = new EventEmitter<Chat>();
onSelect(listchildchat: Chat): void {
    this.notifySelect.emit(listchildchat);
}

@Output()
notifyDelete:EventEmitter<Chat> = new EventEmitter<Chat>();
onDelete(listchildchat: Chat): void {
    this.notifyDelete.emit(listchildchat);
}

 @Output()
 notifyshowedit:EventEmitter<Chat> = new EventEmitter<Chat>();
 showedit(){
  this.notifyshowedit.emit();  
  
  
 }
 show: boolean = false;
 public deploymentName: any;
 showModal(){
   this.show = !this.show;
 }
//  fnAddDeploytment(){
//    alert(this.deploymentName);
//  }

//get all members of group via groupid
getMembersData():void {
  let groupid=3;
  this.chatservice.GetAllGroupMembers(groupid).subscribe(res => {
      this.listgroupMembers=res;
console.log(res)
  }, error => console.log(error));
}
    //add groupmember
    AddGroupMember(objgroupMember: GroupMemberVm): void {
    
      if ( this.objgroupMember.id == 0) {
    
       this.chatservice.AddGroupMember(objgroupMember).subscribe(
          (res) => {
            this.getMembersData();
          console.log('GroupMember Data Saved');
          },
          (error) => {
            console.log('GroupMember Data could not be saved');
            console.log(error);
          }
        );
       
       this.objgroupMember = new GroupMemberVm();
      }
     
    }
       //get all records
getData():void {
  this.chatservice.getAllgroups().subscribe(res => {
      this.listgroup= res;
console.log("GroupList in ChatList:");
 console.log(res)
  }, error => console.log(error));
}
}
