import { ChatService } from './../../service/chat.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chat } from 'src/app/model/chat';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-chat',
  templateUrl: './edit-chat.component.html',
  styleUrls: ['./edit-chat.component.css']
})
export class EditChatComponent implements OnInit {


  @Input() objeditchat: Chat = new Chat();
  @Output() notifyCancel: EventEmitter<any> = new EventEmitter();
  
  @Output() notifyCreate: EventEmitter<Chat> = new EventEmitter<Chat>();
  @Output() notifyUpdate: EventEmitter<Chat> = new EventEmitter<Chat>();
  constructor(private chatservice:ChatService,private toastr: ToastrService,
    ) { }

  ngOnInit() {
                
}
onSave() {
  if( this.objeditchat.id==0 ){
    this.notifyCreate.emit(this.objeditchat);
   }
   else{
     this.notifyUpdate.emit(this.objeditchat);   
       }
      
}
onCancel() {
   this.objeditchat = new Chat();
   this.notifyCancel.emit();  
}

}
