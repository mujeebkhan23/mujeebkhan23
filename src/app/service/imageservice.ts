import { Client } from './../model/client.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lawyer } from '../model/lawyer.model';

@Injectable({ providedIn: 'root' })

export class ImageService {

  public objlawyer: Lawyer = new Lawyer;

  constructor( private http: HttpClient) {}


  public uploadImage(image: File) {
    const formData = new FormData();
    let token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
    let header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${token}`)
      }
    formData.append('image', image);

    // return this.http.post('/api/v1/image-upload', formData);
    return this.http.post(`${environment.apiUrl}/File/Upload`,formData,header);
  }
  
  public onImageDownload() {
    let DownloadId=this.objlawyer.imageFileId;
     let token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
     let header = {
         headers: new HttpHeaders()
           .set('Authorization',  `Bearer ${token}`)
     } 
     return this.http.get(`${environment.apiUrl}/File/download/`+DownloadId,header).subscribe(
       (res:any)=>
       {
         console.log(res.data);
       this.objlawyer.imagePath=res.data.filePath;
       console.log(this.objlawyer.imagePath);
       }
     );   
 }
}
// public onFileChange(event:any) {
//   const reader = new FileReader();
//   let formData = new FormData();
//   let token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
//   let header = {
//       headers: new HttpHeaders()
//         .set('Authorization',  `Bearer ${token}`)
//     }

//   if (event.target.files && event.target.files.length) { 
//     let files: FileList[]=event.target.files;
//     Array.from(files).forEach(f => formData.append("file",f as any));
//   return this.http.post(`${environment.apiUrl}/File/Upload`, formData,header).subscribe(
//     (res:any)=>
//     {
//       console.log(res.data);
//       this.objlawyer.imageFileId=res.data.fileId;
//       //FileId
//     }
//   );
//   }

// return null;

// }
