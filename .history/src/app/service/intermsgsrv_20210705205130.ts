import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new BehaviorSubject<any>({} as any);

    sendActiveGroupId(GroupId: number) {
        this.subject.next({groupId:GroupId});
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
  
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    getGroupId(): Observable<any> {
        return this.subject.asObservable();
    }
}