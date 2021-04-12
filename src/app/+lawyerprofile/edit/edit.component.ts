import { Affiliation } from './../../model/affiliation.model';
import { Lawyer } from './../../model/lawyer.model';
import { Component, Inject, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, Provider } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { lawyerProfileService } from 'src/app/service/lawyerprofile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { License } from 'src/app/model/license.model';
import { Speciality } from 'src/app/model/speciality.model';

@Component({
  selector: 'app-edit2',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
 
})
export class EditFormComponent implements OnInit  
{
  @Input()    objlawyer: Lawyer = new Lawyer;
  @Output() notifyCreate: EventEmitter<Lawyer> = new EventEmitter<Lawyer>();
  @Output() notifyUpdate:EventEmitter<Lawyer>=new EventEmitter<Lawyer>();
  @Output() notifyCancel:EventEmitter<any>=new EventEmitter<any>();
  url:any;
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
       
        
        return this.http.post(`${environment.apiUrl}/File/Upload`, formData,header).subscribe(
          (res:any)=>
          {
            console.log(res.data);
            this.objlawyer.imageFileId=res.data.fileId;
            //FileId
          }
        );
        
        
      }
      // return null;
      // let reader = new FileReader();
      // reader.onload = (event: any) => {
      //   this.imageUrl = event.target.result;
      // }
      // reader.readAsDataURL(this.fileToUpload);
      return null;
      
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
//  //Upload Image 
//  fileToUpload: any;
//  imageUrl: any;
//  handleFileInput(file: FileList) {
//    this.fileToUpload = file.item(0);

//    //Show image preview
//    let reader = new FileReader();
//    reader.onload = (event: any) => {
//      this.imageUrl = event.target.result;
//    }
//    reader.readAsDataURL(this.fileToUpload);
//  }
     addInput(){
      let aff={} as Affiliation;
      aff.affiliation="";      
      this.objlawyer.listLawyerAffiliation.push(aff);
      console.log(this.objlawyer.listLawyerAffiliation)
     }
     addLicenseType()
     {
       let lic={} as License;
       lic.licenseType="high court";
       this.objlawyer.listLawyerLicense.push(lic);
       console.log(this.objlawyer.listLawyerLicense);
     }
     addSpeciality()
     {
       let spc={} as Speciality;
       spc.speciality="criminal";
       this.objlawyer.listLawyerSpeciality.push(spc);
       console.log(this.objlawyer.listLawyerSpeciality);
       
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
     
}

