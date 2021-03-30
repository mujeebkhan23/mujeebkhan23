
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { ChatCompComponent } from './chat-comp.component';
import { ChatRoutingModule } from './chat-comp-routing.module';
import { EditChatComponent } from './edit-chat/edit-chat.component';
import { ListChatComponent } from './list-chat/list-chat.component';
import { GrouplistComponent } from './grouplist/grouplist.component';



@NgModule({
  imports: [
    ChatRoutingModule,
    FormsModule,
    CommonModule, 
  ],
  
  exports:[ChatCompComponent],
  declarations: [ChatCompComponent, EditChatComponent, ListChatComponent, GrouplistComponent],
  bootstrap: [ChatCompComponent]
})
export class ChatModule { }
