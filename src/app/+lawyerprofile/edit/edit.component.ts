import { Affiliation } from './../../model/affiliation.model';
import { Lawyer } from './../../model/lawyer.model';
import { Component, Inject, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, Provider } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { lawyerProfileService } from 'src/app/service/lawyerprofile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { License } from 'src/app/model/license.model';
import { Speciality } from 'src/app/model/speciality.model';
import {DomSanitizer} from '@angular/platform-browser';
import { ImageService } from 'src/app/service/imageservice';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public imageUrl: string, public file: File) {}
}

@Component({
  selector: 'app-edit2',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
 
})

export class EditFormComponent implements OnInit  {
  @Input()    objlawyer: Lawyer = new Lawyer;
  @Output() notifyCreate: EventEmitter<Lawyer> = new EventEmitter<Lawyer>();
  @Output() notifyUpdate:EventEmitter<Lawyer>=new EventEmitter<Lawyer>();
  @Output() notifyCancel:EventEmitter<any>=new EventEmitter<any>();
 
  url:any;
  destination:any;
  imageUrl: any;
  selectedFile!: ImageSnippet;
 
    constructor(
      private lprofileService: lawyerProfileService,
      private http: HttpClient,
      private sanitizer:DomSanitizer,
      private imageService: ImageService
   ) {  }
  ngOnInit(): void {
    this.addInput();
    this.addLicenseType();
    this.addSpeciality();
    //this.destination=  JSON.parse(localStorage.getItem('FilePath') || '{}');
    JSON.parse(localStorage.getItem('userProfile') || '{}');
    this.imageUrl=localStorage.getItem('ImageURL');
    this.imageUrl=JSON.parse(localStorage.getItem('ImagePath') || '{}');
    console.log(this.objlawyer) 
  
       }
       addInput(){
        let aff={} as Affiliation;
        aff.affiliation="";      
        this.objlawyer.listLawyerAffiliation.push(aff);
        console.log(this.objlawyer.listLawyerAffiliation)
       }
       addLicenseType()
       {
         let lic={} as License;
         lic.licenseType="";
         this.objlawyer.listLawyerLicense.push(lic);
         console.log(this.objlawyer.listLawyerLicense);
       }
       addSpeciality()
       {
         let spc={} as Speciality;
         spc.speciality="";
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

        //Upload File 
        
    processFile(imageInput: any) {
      const file: File = imageInput.files[0];
      const reader = new FileReader();
  
      reader.addEventListener('load', (event: any) => {
  
        this.selectedFile = new ImageSnippet(event.target.result, file);
        this.selectedFile.pending = true;
        this.imageService.uploadImage(this.selectedFile.file).subscribe(
          (res:any) => {
            console.log(res.data);
            this.objlawyer.imageFileId=res.data.fileId;
            
            //localStorage.setItem('FilePath',JSON.stringify(res.data["filePath"]));

          },
          (err) => {
          })
      });
         reader.onload = (event: any) => {

          this.imageUrl = event.target.result;
         this.objlawyer.imagePath=this.imageUrl;
         localStorage.setItem('ImageURL',this.imageUrl);
         }
      reader.readAsDataURL(file);
      //console.log(reader.result);

        } 
}