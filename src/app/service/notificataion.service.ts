import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";  // or from "@microsoft/signalr" if you are using a new library
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
 public data:any;

  private hubConnection!: signalR.HubConnection;
  public hub: any;
  constructor(){}
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl(`${environment.baseUrl}/AppHub`)
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));

     
  }
  // public getServerMessageListener():Observable<any>{  
  //   return this.hubConnection.on();
  //    // console.log(data);
   
  // }
 
 
  public getServerMessageListener(){
  this.hub=  this.hubConnection.on('ServerMessage', (data) => {
      this.data = data;
     console.log(data);
    
    });
    return this.hub;
  }
}