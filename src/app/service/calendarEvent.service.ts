import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CalendarEventModel } from '../model/calendarEvent.model';

@Injectable({ providedIn: 'root' })
export class CalendarEventService {
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

  public getAll(): Observable<CalendarEventModel[]> {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.http.get<CalendarEventModel[]>(
      `${environment.apiUrl}/Calendars`,
      header
    );
  }

  getById(id: string) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http.get<CalendarEventModel>(
      `${environment.apiUrl}/Calendars/${id}`,
      header
    );
  }

  create(updata: CalendarEventModel) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };

    return this.http
      .post<CalendarEventModel>(
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

  public Update(Id: number, itemToUpdate: any): Observable<CalendarEventModel> {
    //var toAdd = JSON.stringify(itemToUpdate);
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')
        .set('Accept', '*/*'),
    };
    return this.http.put<CalendarEventModel>(
      `${environment.apiUrl}/Calendars/Update/` + Id,
      JSON.stringify(itemToUpdate),
      header
    );
  }
  Delete(id: number) {
    var token = JSON.parse(localStorage.getItem('token') || '{}').accessToken;
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http.delete<CalendarEventModel>(
      `${environment.apiUrl}/Calendars/Delete/` + id,
      header
    );
  }
}
