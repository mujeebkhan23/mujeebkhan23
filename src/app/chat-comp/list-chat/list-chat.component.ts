import { ChatService } from './../../service/chat.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chat } from 'src/app/model/chat';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.css']
})
export class ListChatComponent implements OnInit {
  

  @Input()
  public listchildchat: Chat[] = [];
 

  constructor(private chatservice: ChatService) { }

  ngOnInit() {
     this.chatservice.getAll().subscribe(res => {
      this.listchildchat= res.data;
 console.log(res.data)
   }, error => console.log(error));
  
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
}
