import { Lawyer } from '../model/lawyer.model';
import { Component, OnDestroy, Provider, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { lawyerProfileService } from '../service/lawyerprofile.service';
import { ToastrService } from 'ngx-toastr';
import { Affiliation } from '../model/affiliation.model';
import { License } from '../model/license.model'; 
import { Speciality } from '../model/speciality.model';

@Component({
  selector: 'app-lawyerprofile',
  templateUrl: './lawyerprofile.component.html',
  styleUrls: ['./lawyerprofile.component.css'],
})
export class LawyerProfileComponent {

  public Lawyerlist: Lawyer[] = [];
  public objlawyer: any = Lawyer;
  subscription: any = Subscription;
  public mode: string = 'Form';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lprofileService: lawyerProfileService,
    private toastr: ToastrService
  ) {  }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    //  this.subscription.unsubscribe();
  }

  getData(): void {
    this.lprofileService.getAll().subscribe(
      (res) => {
        this.Lawyerlist = res;
        console.log(res);
        
        let newLayer: Lawyer = new Lawyer();
        newLayer.name = JSON.parse(localStorage.getItem('UserName') || '{}');
        this.objlawyer = JSON.parse(localStorage.getItem('userProfile') || '{}');
        if (
          this.objlawyer === null ||
          this.objlawyer.name === undefined ||
          this.objlawyer.name === ''
        ) {
          newLayer.listLawyerAffiliation.push(new Affiliation());
          newLayer.listLawyerLicense.push(new License());
          newLayer.listLawyerSpeciality.push(new Speciality());
          this.objlawyer = newLayer; 
        }
        console.log(newLayer);
      },
      (error) => console.log(error)
    );
  
  }

  onCreate(objlawyer: Lawyer): void {
    if (this.objlawyer.id === undefined || this.objlawyer.id === 0) {
      this.lprofileService.create(objlawyer).subscribe(
        (res) => {
          //localstorage
          this.getData();
          this.toastr.success('Save Successful!');
          console.log('User Profil Data Saved');
        },
        (error) => {
          console.log('User Profil Data could not be saved');
          console.log(error);
        }
      );
    }
    this.mode = 'Form';
  }
  onUpdate(objlawyer: Lawyer): void {
    this.lprofileService.Update(objlawyer.id, objlawyer).subscribe(
      (res) => {
        this.getData();
        this.toastr.success('Profile Update Successfully !');
        console.log('User Profil Data Updated');
      },
      (error) => {
        console.log('User Profil Data could not be Updated');
        console.log(error);
      }
    );
    this.mode = 'Form';
  }
  onCancel(): void {
    this.newData();
    //this.mode="Form";
    // this.mode="List";
  }
  onSelect(objownerpartner: Lawyer): void {
    this.mode = 'Form';
    this.objlawyer = objownerpartner;
  }
  showedit(): void {
    this.mode = 'Form';
  }
  onDelete(objlawyer: Lawyer): void {
    this.lprofileService.Delete(objlawyer.id).subscribe(
      (response) => {
        this.getData();
        this.toastr.success(
          'Success',
          'Record [ID:' + objlawyer.id + '] deleted successfully'
        );
        console.log('data delete success');
      },
      (error) => {
        this.getData();
        this.toastr.error('Error', 'Error deleting record [ID:');
      }
    );
  }
  newData(): void {
    this.objlawyer = new Lawyer();
  }
  printData(): void {
    // this.toastr.warning("It is not functional yet", 'Todo');
    this.newData();
  }
  cancelData(): void {
    this.newData();
  }
}
