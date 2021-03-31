import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UserCaseNature } from 'src/app/model/CaseNature';
import { CaseService } from 'src/app/service/CaseService';

@Component({
  selector: 'app-case-nature',
  templateUrl: './case-nature.component.html',
  styleUrls: ['./case-nature.component.css']
})
export class CaseNatureComponent implements OnInit {

  public listUserCase: UserCaseNature[] = [];
  public objUserCase:any= UserCaseNature;
   
   subscription: any=Subscription;
   public mode:string="List";//Form
 
  ;
 constructor(
   private route: ActivatedRoute,
   private router: Router,
   private PCaseService:CaseService ,private toastr:ToastrService,
 
   ) {
     
       }
     
     //put test code here
     ngOnInit(){
       this.getData();
    }
     ngOnDestroy() {
       // unsubscribe to ensure no memory leaks
       this.subscription.unsubscribe();
   }
   getData(): void {
       this.PCaseService.getAll().subscribe(res => {
         console.log(res.data);
           this.listUserCase= res.data;
       }, error => console.log(error));
     this.objUserCase= new UserCaseNature();		
   }
  
 
   
 //   onNotify(objdata: Userpost): void {
 //       this.objUserPost = objdata;
 //       this.saveData();
 //   }
 onCreate(objUserCase: UserCaseNature): void {
     if (this.objUserCase.id == "underfined" || this.objUserCase.id==0) {
         this.PCaseService.create(objUserCase)
             .subscribe(res => {
               this.getData(); 
               this.toastr.success("save successfully")
               console.log('User Profile Data Saved'); },
             error => {
               console.log('User Profile Data could not be saved');
             console.log(error);});        
     }
   //   else {
   //       this.PProfileService.Update(objdata.Id,objdata)
   //           .subscribe(res => {this.getData(); console.log('User Profil Data Updated'); },
   //   error => {console.log('User Profil Data could not be Updated');        
   //               console.log(error);
   //   });
   // }
     this.mode="List";
     }
 onUpdate(objUserCase:UserCaseNature) :void {
   this.PCaseService.Update(objUserCase.id,objUserCase)
            .subscribe(res => {this.getData(); 
             this.toastr.success("update successfully")
             console.log('User Profil Data Updated'); },
     error => {console.log('User Profil Data could not be Updated');        
                 console.log(error);
    });
   
   this.mode="List";
 }
   onEdit(objUserCase: UserCaseNature): void {
 
     this.objUserCase = objUserCase;		
 }
   
   onSelect(objUserCase: UserCaseNature): void {
     this.mode="Form";
       this.objUserCase = objUserCase;		
   }
   onDelete(objUserCase: UserCaseNature): void {
   this.PCaseService.Delete(objUserCase.id)
    .subscribe(response => {
               this.getData();
                this.toastr.success("Success","Record [ID:"+objUserCase.id+"] deleted successfully")
       //this.notificationservice.success("Suceess", "Record [ID:"+objownerpartner.id+"] deleted successfully", {id: objownerpartner.id});
               //console.log("data delete success");
           },
           
           error => {
               this.getData();
       // this.toastr.error("Error", "Error deleting record [ID:"+objuserprofile.Id+"]");
               //console.log("data delete error");
           });  
   }
   newData(): void {
       this.objUserCase = new UserCaseNature();
   }
   printData(): void {
       // this.toastr.warning("It is not functional yet", 'Todo');
       this.newData();
   }
   onCancel(): void {
       this.newData();
       this.mode="List"
   }
   searchData(data: any): void {
       //this.newData();
       //this.srvInformationRequestService.FullTextSearch(data).subscribe(res => {
       //    if (res != null && res.length > 0)
       //        this.objInformationRequest = res[0];
       //}, error => { this.toastr.error(error, 'Error'); console.log(error); });
   }
   showedit(): void {
     this.mode="Form";
   //  this.objUserProfile = objuserprofile;		
 }
   
}
