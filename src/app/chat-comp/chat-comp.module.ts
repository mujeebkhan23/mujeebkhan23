
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-comp-routing.module';
import { EditChatComponent } from './edit-chat/edit-chat.component';
import { ListChatComponent } from './list-chat/list-chat.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { BrowserModule } from '@angular/platform-browser';
import { ChatCompComponent } from './chat-comp.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  imports: [
    ChatRoutingModule,
    SweetAlert2Module,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  
  exports:[ChatCompComponent],
  declarations: [ChatCompComponent, EditChatComponent, ListChatComponent, GrouplistComponent],
  bootstrap: [ChatCompComponent]
})
export class ChatModule { }

