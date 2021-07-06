import { ChatService } from './../service/chat.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Chat } from '../model/chat';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Groups } from '../model/groups';
import { MessageService } from '../service/intermsgsrv';

@Component({
  selector: 'app-chat-comp',
  templateUrl: './chat-comp.component.html',
  styleUrls: ['./chat-comp.component.css'],
})
export class ChatCompComponent implements OnInit {
  public activeGroupId: number = 0;
  public myId: string = '';


  //object of class
  public listchat: Chat[] = [];

  public objchat: any = Chat;
  
  public objchat1:any=Chat;
  public listgroup: Groups[] = [];

  // subscription: any = Subscription;
  public subscription: Subscription = new Subscription;
  public messages:any[]=[];
  public data:any;

  //for hiding controll
  //public mode:string="Group";//List//Form

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetection: ChangeDetectorRef,
    private chatService: ChatService,
    private toastr: ToastrService,private messageService: MessageService
  ) {}

  ngOnInit() {

    this.subscription = this.messageService.getMessage().subscribe(data => 
      {
       
         this.objchat1=JSON.parse(data.data)
         
         this.listchat.push(this.objchat1)});
         
    }
    ngOnDestroy() {
     // this.subscription.unsubscribe(); 
      if (this.subscription) {
        this.subscription.unsubscribe();
    }
    }
  onSelectGroup(evn: any) {
    this.activeGroupId = evn;
    this.getChatData();
    
  }
  //get chat by group id
  getChatData(): void {
    this.chatService.getAllChatsByGroupId(this.activeGroupId).subscribe(
      (res) => {
        this.listchat = res;
        
        console.log(res);
      },
      (error) => console.log(error)
    );
    this.objchat = new Chat();
  }
 

  onCreate(objchat: Chat): void {
    if (this.objchat.Id == 'undefined' || this.objchat.Id == 0) {
      objchat.groupId = this.activeGroupId;
      this.chatService.create(objchat).subscribe(
        (res) => {
          //this.getData();
         // this.getChatData();
          this.toastr.success('Message Sent successfully', 'Message');
          console.log('User Profile Data Saved');
        },
        (error) => {
          console.log('User Profile Data could not be saved');
          this.toastr.error('Error', "User Profile Data Couldn't Save");
          console.log(error);
        }
      );
      this.objchat = new Chat();
    }
  }
//update chat
  onUpdate(objchat: Chat): void {
    this.objchat = objchat;
  }

  onSelect(objchat: Chat): void {
    this.objchat = objchat;
  }

}
