import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";  // or from "@microsoft/signalr" if you are using a new library
import { ConsoleReporter } from 'jasmine';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Chat } from '../model/chat';
import { MessageService } from './intermsgsrv';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
 public data:any;

 messages: string[] = [];
  private hubConnection!: signalR.HubConnection;
  public hub: any;
  constructor(private internMsg:MessageService){
    //this.startConnection();
   // this.hubConnection.on("ServerMessage", (user, message) => { this.mapReceivedMessage(user, message); });
  }
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl(`${environment.baseUrl}/AppHub`)
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));

      
  }

  public stopConnection() {
    this.hubConnection.stop().then(() => {
      console.log('stopped');
    }).catch(err => console.log(err));
  }
   
  public getServerMessageListener(){
   this.hubConnection.on('Chat', (data) => {
    this.data=data;
    consol.console.log(data);
    
    this.internMsg.sendMessageWithData("Chat",data);
   // this.internMsg.createGroupReal("Group",data);

    });
    

    
  }


 
  joinGroup(group: string): void {
    if (this.hubConnection) {
      this.hubConnection.invoke('Entered', group);
    }
  }
 
  leaveGroup(group: string): void {
    if (this.hubConnection) {
      this.hubConnection.invoke('Left', group);
    }
  }
 
}