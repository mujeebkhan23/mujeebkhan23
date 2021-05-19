import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";  // or from "@microsoft/signalr" if you are using a new library
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Chat } from '../model/chat';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
 public data:any;
 private receivedMessageObject: Chat = new Chat();
 private sharedObj = new Subject<Chat>();
 
 nick = '';
 message = '';
 messages: string[] = [];
  private hubConnection!: signalR.HubConnection;
  public hub: any;
  constructor(){
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
  
 
    public sendMessage(): void {
      this.hubConnection
        .invoke('ServerMessage', this.nick, this.message)
        .catch(err => console.error(err));
  
    }
 
  
  public getServerMessageListener():Observable<any>{
  this.hub=  this.hubConnection.on('ServerMessage', (data) => {
    this.data=data;
    console.log("Message From Server: " +data.plainMessage);
    });
    
    return this.hub;
  }


 
  joinGroup(group: string): void {
    if (this.hubConnection) {
      this.hubConnection.invoke('JoinGroup', group);
    }
  }
 
  leaveGroup(group: string): void {
    if (this.hubConnection) {
      this.hubConnection.invoke('LeaveGroup', group);
    }
  }
 
}