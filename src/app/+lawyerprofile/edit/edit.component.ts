import { Affiliation } from './../../model/affiliation.model';
import { Lawyer } from './../../model/lawyer.model';
import { Component, Inject, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, Provider } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { lawyerProfileService } from 'src/app/service/lawyerprofile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit2',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
 
})
export class EditFormComponent implements OnInit  
{
  @Input()
  objlawyer: Lawyer = new Lawyer;
  @Output() notifyCreate: EventEmitter<Lawyer> = new EventEmitter<Lawyer>();
  @Output() notifyUpdate:EventEmitter<Lawyer>=new EventEmitter<Lawyer>();
  @Output() notifyCancel:EventEmitter<any>=new EventEmitter<any>();
    constructor(
      private lprofileService: lawyerProfileService,
      private http: HttpClient 
   ) {  }
  ngOnInit(): void {
    console.log(this.objlawyer) 
    // let aff={} as Affiliation;
    // this.objlawyer.affiliations.push(aff);
       }

       public onFileChange(event:any) {
        const reader = new FileReader();
        let formData = new FormData();
        let token=JSON.parse(localStorage.getItem("token")|| '{}').accessToken;
        let header = {
            headers: new HttpHeaders()
              .set('Authorization',  `Bearer ${token}`)
          }

        if (event.target.files && event.target.files.length) {
          let files: FileList[]=event.target.files;
          Array.from(files).forEach(f => formData.append("file",f as any));
        let formData = new FormData();
        return this.http.post(`${environment.apiUrl}/File/Upload`, formData,header).subscribe(
          (res:any)=>
          {
            console.log(res.Data);
        
        return this.http.post(`${environment.apiUrl}/File/Upload`, formData,header).subscribe(
          (res:any)=>
          {
            console.log(res.data);

            //FileId
          }
        );
        }
        return null;
      }
    }
     addInput(){
      let aff={} as Affiliation;
      this.objlawyer.affiliations.push(aff);
     }
    onSave() 
    {
        if(this.objlawyer.id==0){ 
        this.notifyCreate.emit(this.objlawyer);
      }
      else{
        this.notifyUpdate.emit(this.objlawyer);
      }
    }
    onCancel() {
      
        this.objlawyer = new Lawyer();
        this.notifyCancel.emit();
      }
      //Upload Image 
      fileToUpload: any;
      imageUrl: any;
      handleFileInput(file: FileList) {
        this.fileToUpload = file.item(0);
    
        //Show image preview
        let reader = new FileReader();
        reader.onload = (event: any) => {
          this.imageUrl = event.target.result;
          

        }
        reader.readAsDataURL(this.fileToUpload);
      }
}
}
