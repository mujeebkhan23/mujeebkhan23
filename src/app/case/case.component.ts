import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { UserCase } from '../model/Case.model';
import { CaseService } from '../service/CaseService';
@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  subscription: any;
 public listCase :any= UserCase;
  constructor(
    
    private PCaseService:CaseService
    ) {}
      //put test code here
    
      ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
     //get all records
getData():void {
  this.PCaseService.getAll().subscribe(res => {
      this.listCase= res;
console.log(res)
  }, error => console.log(error));

 // this.objUserProfile=new  UserProfileModel();		
}
    ngOnInit(){
       this.getData();
    }
  //   onNotify(objdata: Userpost): void {
  //       this.objUserPost = objdata;
  //       this.saveData();
  //   }
  // onCreate(objUserCase: UserCase): void {
  //     if (this.objUserCase.Id == "underfined" || this.objUserCase.Id==0) {
  //         this.PCaseService.create(objUserCase)
  //             .subscribe(res => {
  //               this.getData(); 
  //              // this.toastr.success("save successfully")
  //               console.log('User Profile Data Saved'); },
  //             error => {console.log('User Profile Data could not be saved');console.log(error);});        
  //     }
    
    
  //   //   else {
  //   //       this.PProfileService.Update(objdata.Id,objdata)
  //   //           .subscribe(res => {this.getData(); console.log('User Profil Data Updated'); },
  //   //   error => {console.log('User Profil Data could not be Updated');        
  //   //               console.log(error);
  //   //   });
  //   // }
    
  //     }
  // onUpdate(objUserCase:UserCase) :void {
  //   this.PCaseService.Update(objUserCase.Id,objUserCase)
  //            .subscribe(res => {this.getData(); 
  //            // this.toastr.success("update successfully")
  //             console.log('User Profil Data Updated'); },
  //     error => {console.log('User Profil Data could not be Updated');        
  //                 console.log(error);
  //            });
    
  // }
  //   onEdit(objUserCase: UserCase): void {
  
  //     this.objUserCase = objUserCase;		
  // }
    
  //   onSelect(objUserCase: UserCase): void {
  //       this.objUserCase = objUserCase;		
  //   }
    onDelete(listcase:UserCase): void {
    this.PCaseService.Delete(this.listCase.Id)
     .subscribe(response => {
                this.getData();
                //this.toastr.success("Success","Record [ID:"+objUserCase.Id+"] deleted successfully")
        //this.notificationservice.success("Suceess", "Record [ID:"+objownerpartner.id+"] deleted successfully", {id: objownerpartner.id});
                //console.log("data delete success");
              console.log(response);
              
            },
            error => {
                this.getData();
        //this.toastr.error("Error", "Error deleting record [ID:"+objUserCase.Id+"]");
                //console.log("data delete error");
            });  
    }
  //   newData(): void {
  //       this.objUserCase = new this.objUserCase();
  //   }
  //   printData(): void {
  //      // this.toastr.warning("It is not functional yet", 'Todo');
  //       this.newData();
  //   }
  //   onCancel(): void {
  //       this.newData();
    
  //   }
  //   searchData(data: any): void {
  //       //this.newData();
  //       //this.srvInformationRequestService.FullTextSearch(data).subscribe(res => {
  //       //    if (res != null && res.length > 0)
  //       //        this.objInformationRequest = res[0];
  //       //}, error => { this.toastr.error(error, 'Error'); console.log(error); });
  //   }
  //   showedit(): void {
      
  //   //  this.objUserProfile = objuserprofile;		
  // }
  //   saveData(): void {        
  //       if (typeof (this.objUserCase.id) == "undefined" || this.objUserCase.id == 0) {
  //           this.PCaseService.Add(this.objUserCase)
  //               .subscribe(res => { this.getData(); //this.toastr.success('User Profile Data Saved', 'Save'); 
  //             },
  //               error => { 
  //                // this.toastr.error('User Profile Data could not be saved', 'Error');  
  //                 console.log(error); });
  //       }
  //       else {
  //           this.PCaseService.Update(this.objUserCase.id, this.objUserCase)
  //               .subscribe(res => { this.getData(); 
  //                // this.toastr.success('User Profile Data Updated', 'Update');
  //                },
  //                   error => {
  //                       //this.toastr.error('User Profile Data could not be Updated', 'Error');
  //                       console.log(error);
  //                   });
  //       }
  //   }
}



