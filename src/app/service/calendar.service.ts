import { CalendarModel } from './../model/calendar.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CalendarService {
  private userSubject: BehaviorSubject<CalendarModel>;

  public user: Observable<CalendarModel>;
  constructor(
    // private router: Router,
    private http: HttpClient
  ) {
    //JSON.parse(JSON.parse(localStorage.getItem('user') ||
    this.userSubject = new BehaviorSubject<CalendarModel>({} as CalendarModel);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): CalendarModel {
    return this.userSubject.value;
  }
  //get data from api

  public getAll(): Observable<CalendarModel[]> {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.http.get<CalendarModel[]>(
      `${environment.apiUrl}/Calendars`,
      header
    ).pipe(map((res:any) => {
      return res.data;
    }));
  }

  getById(id: string) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http.get<CalendarModel>(
      `${environment.apiUrl}/Calendars/${id}`,
      header
    ).pipe(map((res:any) => {
      return res.data;
    }));
  }

  create(updata: CalendarModel) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.http
      .post<CalendarModel>(
        `${environment.apiUrl}/Calendars/Save`,
        updata,
        header
      )
      .pipe(
        map((profile) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('userProfile', JSON.stringify(profile));
          this.userSubject.next(profile);
          return profile;
        })
      );
  }

  public Update(Id: number, itemToUpdate: any): Observable<CalendarModel> {
    //var toAdd = JSON.stringify(itemToUpdate);
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')
        .set('Accept', '*/*'),
    };
    return this.http.put<CalendarModel>(
      `${environment.apiUrl}/Calendars/Update/` + Id,
      JSON.stringify(itemToUpdate),
      header
    ).pipe(map((res:any) => {
      return res.data;
    }));
  }
  Delete(id: number) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http.delete<CalendarModel>(
      `${environment.apiUrl}/Calendars/Delete/` + id,
      header
    ).pipe(map((res:any) => {
      return res.data;
    }));
  }
}
