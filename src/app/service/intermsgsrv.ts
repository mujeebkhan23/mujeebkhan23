import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<any>();
    sendMessageWithData(message: string,data:any) {
        this.subject.next({ text: message, data:data });
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
}