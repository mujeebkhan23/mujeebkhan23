import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<any>();
   private data: BehaviorSubject<any> = new BehaviorSubject<any>(null);

     sendActiveGroupId(GroupId: number) {
        this.data.next({groupId:GroupId});
    }
    // private connection: signalR.HubConnection;
    sendMessageWithData(message: string,data:any) {
        this.subject.next({ text: message, data:data });
        
    }
    createGroupReal(group: string,data:any){
        this.subject.next({ text: group, groupdata:data });

    }
    sendMessage(message: string) {
        this.subject.next({text:message});
    }
   
    clearMessage() {
        this.subject.next();
    }
    getGroupId(): Observable<any> {
        return this.data.asObservable();
    }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
  
}