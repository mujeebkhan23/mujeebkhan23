import { Client } from './../model/client.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/security.model';
import { environment } from 'src/environments/environment';

 
@Injectable({ providedIn: 'root' })
export class clientProfileService {
  Add(objClient: any) {
    throw new Error('Method not implemented.');
  }
   
    private userSubject: BehaviorSubject<Client>;
    public user: Observable<Client>;
    public listClient: Client[] = [];
    public objClient: Client = new Client;
    constructor(
       // private router: Router,
        private http: HttpClient
    ) {
      //JSON.parse(JSON.parse(localStorage.getItem('user') ||
        this.userSubject = new BehaviorSubject<Client>({} as Client);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): Client {
        return this.userSubject.value;
    }
    
   public getAll(): Observable<Client[]> {
          
      var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
      var header = {
          headers: new HttpHeaders()
            .set('Authorization',  `Bearer ${token}`)

        }
        return this.http.get<Client[]>(`${environment.apiUrl}/ClientProfiles`,header).pipe(map((res:any) => {
          return res.data;
        }));
    }

    getById(id: string) {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
          }
        return this.http.get<Client>(`${environment.apiUrl}/ClientProfiles/GetClientProfile${id}`,header).pipe(map((res:any) => {
          return res.data;
        }));
    }
    create(updata:Client) {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
          }
          
        return this.http.post<Client>(`${environment.apiUrl}/ClientProfiles/save`, updata,header)
            .pipe(map(profile => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('userProfile', JSON.stringify(profile));
                this.userSubject.next(profile);
                return profile;
            }));
    }
    // public Add(data: Client): Observable<Client>  {
    //     var Token=JSON.parse(localStorage.getItem("Token")|| '{}');
    //     var header = {
    //         headers: new HttpHeaders()
    //           .set('Authorization',  `Bearer ${Token.Token}`)
    //       }
    //     return this.http.post<Client>(`${environment.apiUrl}/ClientProfiles/PostUserProfile`, header);
    // }
    public Update(id:number, itemToUpdate:any): Observable<Client>  {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
              .set('Content-Type','application/json')
              .set('Accept','*/*')
          }
        return this.http.put<Client>(`${environment.apiUrl}/ClientProfiles/update/`+id, JSON.stringify(itemToUpdate),header).pipe(map((res:any) => {
          return res.data;
        }));
    }
    public Delete(id: number): Observable<Client>  {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
          }
        return this.http.delete<Client>(`${environment.apiUrl}/ClientProfiles/` + id,header).pipe(map((res:any) => {
          return res.data;
        }));
    }

  }
