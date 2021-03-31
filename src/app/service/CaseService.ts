import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserCase } from '../model/Case.model';




@Injectable({ providedIn: 'root' })
export class CaseService {

    private userSubject: BehaviorSubject<UserCase>;
    public user: Observable<UserCase>;

    constructor(
        // private router: Router,
        private http: HttpClient
    ) {
        //JSON.parse(JSON.parse(localStorage.getItem('user') ||
        this.userSubject = new BehaviorSubject<UserCase>({} as UserCase);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): UserCase {
        return this.userSubject.value;
    }
     //get data from api
 
     getAll() :Observable<UserCase[]>{
        var token=JSON.parse(localStorage.getItem("token")||'{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
          }

         return this.http.get<UserCase[]>(`${environment.apiUrl}/Cases/GetCase`,header) .pipe(map((res:any) => {
            return res.data;
          }));
     }

     getById(id: string) {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
          }
         return this.http.get<UserCase>(`${environment.apiUrl}/Cases/GetCaseId/${id}`,header) .pipe(map((res:any) => {
            return res.data;
          }));
     }

    create(updata:UserCase) {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
                .set('Authorization', `Bearer ${token}`)
        };

        return this.http.post<UserCase>(`${environment.apiUrl}/Cases/PostCase`, updata, header)
            .pipe(map(UserCase => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('UserCase', JSON.stringify(UserCase));
                this.userSubject.next(UserCase);
                return UserCase;
            }));
    }


    // createPost(data: any): Observable<any> {
    //     return this.http.post(this.baseURL, data);
    // }
    // public Add(data: UserCase): Observable<UserCase>  {
    //     var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
    //     var header = {
    //         headers: new HttpHeaders()
    //           .set('Authorization',  `Bearer ${Token}`)
    //       }
        
    //     return this.http.post<UserCase>(`${environment.apiUrl}/Cases/PostCase`,header);
    // }
    public Update(id: number, itemToUpdate: any): Observable<UserCase>  {
        //var toAdd = JSON.stringify(itemToUpdate);
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
              .set('Content-Type','application/json')
              .set('Accept','*/*')
          }
        return this.http.put<UserCase>(`${environment.apiUrl}/Cases/Update/`+ id, JSON.stringify(itemToUpdate),header);
    }
    Delete(id: number) {
        var token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        var header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
          }
        return this.http.delete<UserCase>(`${environment.apiUrl}/Cases/`+ id,header) .pipe(map((res:any) => {
            return res.data;
          }));
      }
}

