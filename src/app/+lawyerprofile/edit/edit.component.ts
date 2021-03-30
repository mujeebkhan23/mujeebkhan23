import { Affiliation } from './../../model/affiliation.model';
import { Lawyer } from './../../model/lawyer.model';
import { Component, Inject, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, Provider } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { lawyerProfileService } from 'src/app/service/lawyerprofile.service';

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
      private lprofileService: lawyerProfileService 
   ) {  }
  ngOnInit(): void {
    console.log(this.objlawyer) 
    // let aff={} as Affiliation;
    // this.objlawyer.affiliations.push(aff);
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
