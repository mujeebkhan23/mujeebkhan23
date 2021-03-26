
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/security.model';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Chat } from '../model/chat';



@Injectable({ providedIn: 'root' })
export class ChatService {
  
    private userSubject: BehaviorSubject<Chat>;
   
    public user: Observable<Chat>;
    constructor(
       // private router: Router,
        private http: HttpClient
    ) {
      //JSON.parse(JSON.parse(localStorage.getItem('user') ||
        this.userSubject = new BehaviorSubject<Chat>({} as Chat);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): Chat {
        return this.userSubject.value;
    }
   //get data from api
 
  public  getAll():Observable<Chat[]>{
        var Token=JSON.parse(localStorage.getItem("Token")|| '{}');
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${Token.Token}`)
          }

         return this.http.get<Chat[]>(`${environment.apiUrl}/Chats`,header);
               }

     getById(id: string) {
        var Token=JSON.parse(localStorage.getItem("Token")|| '{}');
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${Token.Token}`)
          }
         return this.http.get<Chat>(`${environment.apiUrl}/Chats/${id}`,header);
     }

    create(updata:Chat) {

        
        
        var Token=JSON.parse(localStorage.getItem("Token")|| '{}');
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${Token.Token}`)
          }
          
        return this.http.post<Chat>(`${environment.apiUrl}/Chats/Save`, updata,header)
            .pipe(map(profile => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('Save', JSON.stringify(profile));
                this.userSubject.next(profile);
                return profile;
            }));
    }
   
    
    public Update(Id: number, itemToUpdate: any): Observable<Chat>  {
        //var toAdd = JSON.stringify(itemToUpdate);
        var Token=JSON.parse(localStorage.getItem("Token")|| '{}');
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${Token.Token}`)
              .set('Content-Type','application/json')
              .set('Accept','*/*')
          }
        return this.http.put<Chat>(`${environment.apiUrl}/Chats/Update/`+ Id, JSON.stringify(itemToUpdate),header);
    }
    Delete(id: number) {
        var Token=JSON.parse(localStorage.getItem("Token")|| '{}');
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${Token.Token}`)
          }
        return this.http.delete<Chat>(`${environment.apiUrl}/Chats/Delete` + id,header);
      }
    
    }


