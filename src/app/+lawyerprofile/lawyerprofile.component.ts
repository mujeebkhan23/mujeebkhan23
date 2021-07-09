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
        this.objlawyer = JSON.parse(localStorage.getItem('userProfile') || '{}');

        if (this.objlawyer.title === null || this.objlawyer.id == 0) {
          newLayer.listLawyerAffiliation.push(new Affiliation());
          newLayer.listLawyerLicense.push(new License());
          newLayer.listLawyerSpeciality.push(new Speciality());
          this.objlawyer = newLayer;
        }
        else{
          newLayer.listLawyerAffiliation.push(new Affiliation());
          newLayer.listLawyerLicense.push(new License());
          newLayer.listLawyerSpeciality.push(new Speciality());
        }
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
          this.toastr.success('Profile Created Successfully !');
          console.log('Lawyer Profil Data Saved');
        },
        (error) => {
          this.toastr.error('Profile Could not be saved');
          console.log('Lawyer Profil Data could not be Saved');
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
        this.toastr.success('Profile Updated Successfully !');
        console.log('Lawyer Profil Data Updated');
      },
      (error) => {
        this.toastr.error('Profile could not be Updated')
        console.log('Lawyer Profil Data could not be Updated');
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
    // this.objlawyer = new Lawyer();
    this.getData();
  }
  printData(): void {
    // this.toastr.warning("It is not functional yet", 'Todo');
    this.newData();
  }
  cancelData(): void {
    this.newData();
  }
}
