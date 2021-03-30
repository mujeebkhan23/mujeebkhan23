import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ClientProfileComponent } from './clientprofile.component';
import { ClientProfileRoutingModule } from './clientprofile-routing.module';
import { ListComponent } from './list/list.component';
import { EditFormComponent } from './edit/edit.component';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ClientProfileRoutingModule,
  ],
  declarations: [ClientProfileComponent,EditFormComponent,ListComponent]
})
export class ClientProfileModule { }
