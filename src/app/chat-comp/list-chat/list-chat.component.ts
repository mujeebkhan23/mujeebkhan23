import { ChatService } from './../../service/chat.service';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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

  public profileImage:any;
  @ViewChild('scrollMe')
  private myScrollContainer!: ElementRef;

  constructor(private chatservice: ChatService) { }
  
  ngOnInit() {
   
    
this.myUserId=  JSON.parse(localStorage.getItem('UserId') || '{}');
this.profileImage=JSON.parse(localStorage.getItem('ImagePath') || '{}');

this.scrollToBottom();

        }
        ngAfterViewChecked() { 
                 
          this.scrollToBottom();        
          
      } 
  
      scrollToBottom(): void {
          try {
              this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
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
}
