import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/security.model';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Chat } from '../model/chat';
import { Groups } from '../model/groups';
import { ApiResponse } from '../model/apiresponse';
import { GroupMembers } from '../model/groupMembers';

import { GroupMemberVm } from '../model/groupMemberVm';

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

  public getAll(): Observable<Chat[]> {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.http.get<Chat[]>(`${environment.apiUrl}/Chats`, header).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
  public getAllgroups(): Observable<Groups[]> {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.http
      .get<Groups[]>(`${environment.apiUrl}/Chats/GetAllGroups`, header)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  public getAllChatsByGroupId(groupId: number): Observable<Chat[]> {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http
      .get<Chat[]>(
        `${environment.apiUrl}/Chats/GetChatByGroupId/${groupId}`,
        header
      )
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  public GetAllGroupMembers(groupId: number): Observable<GroupMembers[]> {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http
      .get<GroupMembers[]>(
        `${environment.apiUrl}/Chats/GetAllGroupMembers/${groupId}`,
        header
      )
      .pipe(
        map((res: any) => {
          return res.data;
          
        })
      );
  }
  getById(id: string) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http
      .get<ApiResponse>(`${environment.apiUrl}/Chats/${id}`, header)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  create(updata: Chat) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.http
      .post<Chat>(`${environment.apiUrl}/Chats/Save`, updata, header)
      .pipe(
        map((profile) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('Save', JSON.stringify(profile));
          this.userSubject.next(profile);
          return profile;
        })
      );
  }
  createGroup(groupdata: Groups) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
        .set('Accept', '*/*'),
        
    };

    return this.http
      .post<Groups>(`${environment.apiUrl}/Chats/SaveGroup`, groupdata, header)
      .pipe(
        map((group) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('SaveGroup', JSON.stringify(group));
         // this.userSubject.next(group);
          return group;
        })
      );
  }
  AddGroupMember(groupdata: GroupMemberVm) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
        .set('Accept', '*/*'),
        
    };

    return this.http
      .post<GroupMemberVm>(`${environment.apiUrl}/Chats/AddGroupMember`, groupdata, header)
      .pipe(
        map((group) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('SaveGroupMember', JSON.stringify(group));
         // this.userSubject.next(group);
          return group;
        })
      );
  }

  public Update(id: number, itemToUpdate: any): Observable<Chat> {
    //var toAdd = JSON.stringify(itemToUpdate);
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')
        .set('Accept', '*/*'),
    };
    return this.http
      .put(
        `${environment.apiUrl}/Chats/Update/` + id,
        JSON.stringify(itemToUpdate),
        header
      )
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
    // .map((res:ApiResponse)=> res.data);
  }
  Delete(id: number) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http
      .delete(`${environment.apiUrl}/Chats/Delete/` + id, header)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  DeleteGroup(id:number){
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http
      .delete(`${environment.apiUrl}/Chats/DeleteGroup/` + id, header)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );

  }
}
