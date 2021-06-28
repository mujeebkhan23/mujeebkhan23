import { DatePipe } from '@angular/common';
import { Client } from './../model/client.model';
import { Component, OnDestroy, Provider, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/security.model';
import { securityService } from '../service/security';
import { clientProfileService } from '../service/clientprofile';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.css'],
})
export class ClientProfileComponent {
  public listClient: Client[] = [];
  public objClient: any = Client;
  public selectedClient!: Client;
  message: any;
  subscription: any = Subscription;
  messageService: any;
  clientProfileService: any;
  public mode: string = 'List';
  // clientobj:Client= new Client();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cprofileService: clientProfileService,
    private toastr: ToastrService
  ) {
    // this.getData();
  }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe;
  }
  getData(): void {
    this.cprofileService.getAll().subscribe(
      (res) => {
        this.listClient = res;
        console.log(res);
      },
      (error) => console.log(error)
    );
    this.objClient = new Client();
  }
  onCreate(objClient: Client): void {
    if (this.objClient.id == 'undefined' || this.objClient.id == 0) {
      this.cprofileService.create(objClient).subscribe(
        (res) => {
          this.getData();
          this.toastr.success('Client Profile Created Successfully !');
          console.log('Client Profile Data Saved');
        },
        (error) => {
          this.toastr.error('Client Profile Data could not be saved');
          console.log('Client Profile Data could not be saved');
          console.log(error);
        }
      );
    }
    this.mode = 'List';
  }
  onUpdate(objClient: Client): void {
    this.cprofileService.Update(objClient.id, objClient).subscribe(
      (res) => {
        this.getData();
        this.toastr.success('Client Profile Updated Successfully !');
        console.log('Client Profile Data Updated');
      },
      (error) => {
        this.toastr.error('Client Profile Data could not be Updated');
        console.log('Client Profile Data could not be Updated');
        console.log(error);
      }
    );
    this.mode = 'List';
  }
  onCancel(): void {
    this.newData();
    this.mode = 'List';
  }
  onSelect(objownerpartner: Client): void {
    this.mode = 'Form';
    this.objClient = objownerpartner;
  }
  showedit(): void {
    this.mode = 'Form';
  }
  onDelete(objClient: Client): void {
    var deleteBtn = confirm('Do you want to delete ?');
    if (deleteBtn == true) {
      this.cprofileService.Delete(objClient.id).subscribe(
        (response) => {
          this.getData();
          this.toastr.success(
            'Record [ ID : ' + objClient.id + ' ] deleted successfully'
          );
          //    this.notificationservice.success("Suceess", "Record [ID:"+objownerpartner.id+"] deleted successfully", {id: objownerpartner.id});
          console.log('data deleted successfully');
        },
        (error) => {
          this.getData();
          this.toastr.error('Error', 'Error deleting record [ID:');
        }
      );
    }
  }
  newData(): void {
    this.objClient = new Client();
  }
  printData(): void {
    // this.toastr.warning("It is not functional yet", 'Todo');
    this.newData();
  }
  cancelData(): void {
    this.newData();
  }
}
