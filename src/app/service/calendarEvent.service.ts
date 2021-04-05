import { CalendarModel } from './../model/calendar.model';
import { CalendarEventModel } from './../model/calendarEvent.model';
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

@Injectable({ providedIn: 'root' })
export class EventService {
  private userSubject: BehaviorSubject<CalendarEventModel>;

  public user: Observable<CalendarEventModel>;
  constructor(
    // private router: Router,
    private http: HttpClient
  ) {
    //JSON.parse(JSON.parse(localStorage.getItem('user') ||
    this.userSubject = new BehaviorSubject<CalendarEventModel>(
      {} as CalendarEventModel
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): CalendarEventModel {
    return this.userSubject.value;
  }
  //get data from api

  public getAll(): Observable<CalendarModel[]> {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.http
      .get<CalendarModel[]>(`${environment.apiUrl}/Calendars`, header)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
  public getAllEvents(): Observable<CalendarEventModel[]> {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.http
      .get<CalendarEventModel[]>(
        `${environment.apiUrl}/Calendars/GetAllEvents`,
        header
      )
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  public getAllEventsById(
    calendarId: number
  ): Observable<CalendarEventModel[]> {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http
      .get<CalendarEventModel[]>(
        `${environment.apiUrl}/Calendars/EventById/${calendarId}`,
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
      .get<ApiResponse>(`${environment.apiUrl}/Calendars/${id}`, header)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  create(updata: CalendarEventModel) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.http
      .post<CalendarEventModel>(
        `${environment.apiUrl}/Calendars/SaveEvent`,
        updata,
        header
      )
      .pipe(
        map((profile) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('Save', JSON.stringify(profile));
          this.userSubject.next(profile);
          return profile;
        })
      );
  }

  public Update(id: number, itemToUpdate: any): Observable<CalendarEventModel> {
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
        `${environment.apiUrl}/Calendars/Update/` + id,
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
      .delete(`${environment.apiUrl}/Calendars/Delete/` + id, header)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
