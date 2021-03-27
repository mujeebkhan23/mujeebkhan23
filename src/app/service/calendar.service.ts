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
    var Token = JSON.parse(localStorage.getItem('Token') || '{}');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${Token.Token}`),
    };

    return this.http.get<CalendarModel[]>(
      `${environment.apiUrl}/Calendars`,
      header
    );
  }

  getById(id: string) {
    var Token = JSON.parse(localStorage.getItem('Token') || '{}');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${Token.Token}`),
    };
    return this.http.get<CalendarModel>(
      `${environment.apiUrl}/Calendars/${id}`,
      header
    );
  }

  create(updata: CalendarModel) {
    var Token = JSON.parse(localStorage.getItem('Token') || '{}');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${Token.Token}`),
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
    var Token = JSON.parse(localStorage.getItem('Token') || '{}');
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${Token.Token}`)
        .set('Content-Type', 'application/json')
        .set('Accept', '*/*'),
    };
    return this.http.put<CalendarModel>(
      `${environment.apiUrl}/Calendars/Update/` + Id,
      JSON.stringify(itemToUpdate),
      header
    );
  }
  Delete(id: number) {
    var Token = JSON.parse(localStorage.getItem('Token') || '{}');
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${Token.Token}`),
    };
    return this.http.delete<CalendarModel>(
      `${environment.apiUrl}/Calendars/` + id,
      header
    );
  }
}
