import { ChatService } from './../../service/chat.service';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Chat } from 'src/app/model/chat';
import { MessageService } from 'src/app/service/intermsgsrv';
import { Subscription } from 'rxjs';
import { GroupMembers } from 'src/app/model/groupMembers';
import { GroupMemberVm } from 'src/app/model/groupMemberVm';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Groups } from 'src/app/model/groups';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.css']
})
export class ListChatComponent implements OnInit,OnChanges,OnDestroy {
  public listgroupMembers: GroupMembers[]=[];
  public objgroupMember: GroupMemberVm= new GroupMemberVm();
  groupId: any;
  public subscription: Subscription = new Subscription;
  public listgroup: Groups[]=[];
  @Input()
  public listchildchat: Chat[] = [];
  

  public myUserId:string="";
  @ViewChild('closebutton') closebutton:any;
  public profileImage:any;

  @ViewChild('scrollMe')
  private myScrollContainer!: ElementRef;

  constructor(private chatservice: ChatService,private cdref: ChangeDetectorRef,private messageService: MessageService) {

   }
  
  ngOnInit() {
  

this.myUserId=  JSON.parse(localStorage.getItem('UserId') || '{}');
this.profileImage=JSON.parse(localStorage.getItem('ImagePath') || '{}');




this.subscription = this.messageService.getGroupId().subscribe(group =>
   { this.groupId = group.groupId;
    this.objgroupMember.GroupId=this.groupId;

  });
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

 showModal(){
   this.show = !this.show;
 }


//get all members of group via groupid
getMembersData():void {
  
  this.chatservice.GetAllGroupMembers(this.groupId).subscribe(res => {
      this.listgroupMembers=res;
console.log(res)
  }, error => console.log(error));
}


 Toast:any = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
    //add groupmember
    AddGroupMember(objgroupMember: GroupMemberVm): void {
    
      if ( this.objgroupMember.id == 0) {
    
       this.chatservice.AddGroupMember(objgroupMember).subscribe(
          (res) => {
            this.getMembersData();
            this.Toast.fire({
              icon: 'success',
              title: 'Add Member successfully'
            })
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
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
