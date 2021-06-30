import { Title } from '@angular/platform-browser';

import { Component, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '../model/security.model';

import { securityService } from '../service/security';

import { UserCase } from '../model/Case.model';
import { CaseService } from '../service/CaseService';
import { ToastrService } from 'ngx-toastr';
import { CaseParties } from '../model/Parties';
import { CaseSchedule } from '../model/CaseSchedule';
import { CaseNature } from '../model/CaseNature';

@Component({
  selector: 'app-Case',
  templateUrl: './Case.component.html',
  styleUrls: ['./Case.component.css'],
})
export class CaseComponent implements OnDestroy {
  public listUserCase: UserCase[] = [];
  public objUserCase: any = UserCase;
  public casenature: CaseNature[] = [];

  subscription: any = Subscription;
  public mode: string = 'List'; //Form

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private PCaseService: CaseService,
    private toastr: ToastrService
  ) { }

  //put test code here
  ngOnInit() {
    this.getData();
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe;
  }
  getData(): void {
    this.PCaseService.getAll().subscribe(
      (res) => {
        console.log(res);
        this.listUserCase = res;
      },
      (error) => console.log(error)
    );
    this.objUserCase = new UserCase();
  }

  //   onNotify(objdata: Userpost): void {
  //       this.objUserPost = objdata;
  //       this.saveData();
  //   }
  onCreate(objUserCase: UserCase): void {
    if (this.objUserCase.id == 'underfined' || this.objUserCase.id == 0) {
      this.PCaseService.create(objUserCase).subscribe(
        (res) => {
          this.getData();
          this.toastr.success('save successfully');
          console.log('User Profile Data Saved');
        },
        (error) => {
          console.log('User Profile Data could not be saved');
          console.log(error);
          console.log(objUserCase);
        }
      );
      this.mode = "List";
    }
    //   else {
    //       this.PProfileService.Update(objdata.Id,objdata)
    //           .subscribe(res => {this.getData(); console.log('User Profil Data Updated'); },
    //   error => {console.log('User Profil Data could not be Updated');
    //               console.log(error);
    //   });
    // }
    //this.mode="List";
  }
  onUpdate(objUserCase: UserCase): void {
    this.PCaseService.Update(objUserCase.id, objUserCase).subscribe(
      (res) => {
        this.getData();
        this.toastr.success('update successfully');
        console.log('User Profil Data Updated');
      },
      (error) => {
        console.log('User Profil Data could not be Updated');
        console.log(error);
      }
    );

    this.mode = 'List';
  }
  onEdit(objUserCase: UserCase): void {
    this.objUserCase = objUserCase;
  }

  onSelect(objUserCase: UserCase): void {
    this.mode = 'Form';
    this.objUserCase = objUserCase;
  }
  onDelete(objUserCase: UserCase): void {
    var DeleteBtn = confirm('Do you want to delete ?');
    if (DeleteBtn == true) {
      this.PCaseService.Delete(objUserCase.id).subscribe(
        (response) => {
          this.getData();
          this.casenature;
          this.toastr.success(
            'Success',
            'Record [ID:' + objUserCase.id + '] deleted successfully'
          );

          //this.notificationservice.success("Suceess", "Record [ID:"+objownerpartner.id+"] deleted successfully", {id: objownerpartner.id});
          //console.log("data delete success");
        },

        (error) => {
          this.getData();
          // this.toastr.error("Error", "Error deleting record [ID:"+objuserprofile.Id+"]");
          //console.log("data delete error");
        }
      );
    }
  }
  //'partytype: firstparty, opponentparty'

  newData(partyType: string): void {
    this.objUserCase = new UserCase();
    // let objparty = new CaseParties();
    // {
    //   partyType = partyType;
    // }
    // this.objUserCase.parties.push(objparty);
  }

  onCancel(): void {
    //this.newData();
    this.mode = 'List';
  }
  searchData(data: any): void {
    //this.newData();
    //this.srvInformationRequestService.FullTextSearch(data).subscribe(res => {
    //    if (res != null && res.length > 0)
    //        this.objInformationRequest = res[0];
    //}, error => { this.toastr.error(error, 'Error'); console.log(error); });
  }
  showedit(): void {
    this.mode = 'Form';
    //  this.objUserProfile = objuserprofile;
  }
}