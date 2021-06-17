import { Affiliation } from './../../model/affiliation.model';
import { Lawyer } from './../../model/lawyer.model';
import {
  Component,
  Inject,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  Provider,
} from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { lawyerProfileService } from 'src/app/service/lawyerprofile.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { License } from 'src/app/model/license.model';
import { Speciality } from 'src/app/model/speciality.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/service/imageservice';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public imageUrl: string, public file: File) {}
}

@Component({
  selector: 'Lawyer-Form',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditFormComponent implements OnInit {

  @Input() objlawyer: Lawyer = new Lawyer();
  @Output() notifyCreate: EventEmitter<Lawyer> = new EventEmitter<Lawyer>();
  @Output() notifyUpdate: EventEmitter<Lawyer> = new EventEmitter<Lawyer>();
  @Output() notifyCancel: EventEmitter<any> = new EventEmitter<any>();

  
  imageUrl: any;
  selectedFile!: ImageSnippet;

  constructor(
    private lprofileService: lawyerProfileService,
    private http: HttpClient,
    private imageService: ImageService
  ) {}
  ngOnInit(): void {
    
    
    let newLayer: Lawyer = new Lawyer();
    //  newLayer.name = JSON.parse(localStorage.getItem('UserName') || '{}');
    this.objlawyer = JSON.parse(localStorage.getItem('userProfile') || '{}');
    if (
      this.objlawyer === null ||
      this.objlawyer.name == undefined ||
      this.objlawyer.name == ''
    ) {
      newLayer.listLawyerAffiliation.push(new Affiliation());
      newLayer.listLawyerLicense.push(new License());
      newLayer.listLawyerSpeciality.push(new Speciality());
      this.objlawyer = newLayer;
    }
    // this.addInput();
    // this.addLicenseType();
    // this.addSpeciality();
    // else if(this.objlawyer!==null){
    //   newLayer.listLawyerAffiliation.push(new Affiliation());
    //   newLayer.listLawyerLicense.push(new License());
    //   newLayer.listLawyerSpeciality.push(new Speciality()); 
    // }
    console.log(newLayer);

    this.imageUrl = localStorage.getItem('ImagePath');
    // this.imageUrl = JSON.parse(localStorage.getItem('ImagePath') || '{}');
    console.log(this.objlawyer);
  }


  ngOnChanges(changes: SimpleChanges) {
    
    if (changes.objlawyer && !changes.objlawyer.isFirstChange()) {

      this.objlawyer = changes.objlawyer.currentValue;
   
      }
}

  addInput() {
    let aff = {} as Affiliation;
    aff.affiliation = '';
    this.objlawyer.listLawyerAffiliation.push(aff);
    console.log(this.objlawyer.listLawyerAffiliation);
  }
  addLicenseType() {
    let lic = {} as License;
    lic.licenseType = '';
    this.objlawyer.listLawyerLicense.push(lic);
    console.log(this.objlawyer.listLawyerLicense);
  }
  addSpeciality() {
    let spc = {} as Speciality;
    spc.speciality = '';
    this.objlawyer.listLawyerSpeciality.push(spc);
    console.log(this.objlawyer.listLawyerSpeciality);
  }
  onSave() {
    if (this.objlawyer.id == 0) {
      this.notifyCreate.emit(this.objlawyer);
    } else {
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
        (res: any) => {
          console.log(res.data);
          this.objlawyer.imageFileId = res.data.fileId;
        },
        (err) => {}
      );
    });
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.objlawyer.imagePath = this.imageUrl;
      localStorage.setItem('ImageURL', this.imageUrl);
    };
    reader.readAsDataURL(file);
    //console.log(reader.result);
  }
}
