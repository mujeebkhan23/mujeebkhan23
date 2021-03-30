import { Component, VERSION } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpEventType,
  HttpHeaders
} from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "fileupload",
  template: `
    Version = {{ version.full }} <br />

    <button type="button" (click)="fileInput.click()">
      <span>Upload</span>
    </button>

    <input #fileInput type="file" (change)="upload($event.target.files)"
    style="display:none;" />

    <ng-container *ngIf="uploadSuccess">
      Upload Successful
    </ng-container>
  `
})
export class AppComponent {
  percentDone: number=0;
  uploadSuccess: boolean=false;

  constructor(private http: HttpClient) {}

  version = VERSION;

  upload(files: File[]) {
    //pick from one of the 4 styles of file uploads below
    this.uploadAndProgress(files);
  }

  basicUpload(files: File[]) {
    let token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
    let header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${token}`)
      }
      let formData = new FormData();
    Array.from(files).forEach(f => formData.append("file", f));
    this.http.post(`${environment.apiUrl}/File/Upload`, formData,header).subscribe(event => {
      console.log("done");
    });
  }

  //this will fail since file.io dosen't accept this type of upload
  //but it is still possible to upload a file with this style
  basicUploadSingle(file: File) {
    let token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
    let header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${token}`)
      }
      this.http.post(`${environment.apiUrl}/File/Upload`, file,header).subscribe(event => {
      console.log("done");
    });
  }

  uploadAndProgress(files: File[]) {
    console.log(files);
    let formData = new FormData();
    Array.from(files).forEach(f => formData.append("file", f));
    let token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
    let header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${token}`)
      }
      this.http.post(`${environment.apiUrl}/File/Upload`, formData, {
        header,
        reportProgress: true,
        observe: "events"
      })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      });
  }

  //this will fail since file.io dosen't accept this type of upload
  //but it is still possible to upload a file with this style
  uploadAndProgressSingle(file: File) {
    let token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
    let header = {
        headers: new HttpHeaders()
          .set('Authorization',  `Bearer ${token}`)
      }
      this.http.post(`${environment.apiUrl}/File/Upload`, file, {
        reportProgress: true,
        observe: "events"
      })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      });
  }
}
