import { Lawyer } from './../model/lawyer.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/security.model';
import { environment } from 'src/environments/environment';

 
@Injectable({ providedIn: 'root' })
export class lawyerProfileService {
  Add(objlawyer: any) {
    throw new Error('Method not implemented.');
  }
   
    private userSubject: BehaviorSubject<Lawyer>;
    public user: Observable<Lawyer>;
    public Lawyerlist: Lawyer[] = [];
    public objlawyer: Lawyer = new Lawyer;
    constructor(
       // private router: Router,
        private http: HttpClient
    ) {
      //JSON.parse(JSON.parse(localStorage.getItem('user') ||
        this.userSubject = new BehaviorSubject<Lawyer>({} as Lawyer);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): Lawyer {
        return this.userSubject.value;
    }
    
   public getAll(): Observable<Lawyer[]> {
          
      var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
      var header = {
          headers: new HttpHeaders()
            .set('Authorization',  `Bearer ${token}`)
        }
        return this.http.get<Lawyer[]>(`${environment.apiUrl}/LawyerProfiles`,header).pipe(map((res:any) => {
          return res.data;
        }));
    }

    getById(id: string) {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
          }
        return this.http.get<Lawyer>(`${environment.apiUrl}/LawyerProfiles/GetClientProfile${id}`,header).pipe(map((res:any) => {
          return res.data;
        }));
    }
    create(updata:Lawyer) {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
          }
          
        return this.http.post<Lawyer>(`${environment.apiUrl}/LawyerProfiles/save`, updata,header)
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
    public Update(id:number, itemToUpdate:any): Observable<Lawyer>  {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
              .set('Content-Type','application/json')
              .set('Accept','*/*')
          }
        return this.http.put<Lawyer>(`${environment.apiUrl}/LawyerProfiles/update/`+id,
         JSON.stringify(itemToUpdate),header).pipe(map((res:any) => {
          return res.data;
        }));
    }
    public Delete(id: number): Observable<Lawyer>  {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
          }
        return this.http.delete<Lawyer>(`${environment.apiUrl}/LawyerProfiles/` + id,header).pipe(map((res:any) => {
          return res.data;
        }));
    }

}
