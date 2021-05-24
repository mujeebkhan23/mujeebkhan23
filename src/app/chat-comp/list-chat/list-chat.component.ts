import { ChatService } from './../../service/chat.service';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Chat } from 'src/app/model/chat';
import { MessageService } from 'src/app/service/intermsgsrv';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.css']
})
export class ListChatComponent implements OnInit,OnChanges {
  
  @Input()
  public listchildchat: Chat[] = [];
 public myUserId:string="";



  constructor(private chatservice: ChatService,    private changeDetection: ChangeDetectorRef,) { }

  ngOnInit() {
      
    
this.myUserId=  JSON.parse(localStorage.getItem('UserId') || '{}');

        }
        ngOnChanges(changes: SimpleChanges) {
          if (changes.listchildchat && !changes.listchildchat.isFirstChange) {
              // exteranl API call or more preprocessing...
              this.listchildchat = changes.listchildchat.currentValue;
          }
      }
        // ngOnChanges(changes: SimpleChanges) {
        //   changes.listchildchat;
           
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
}
