import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './list/list.component';
import { EditFormComponent } from './edit/edit.component';
import { LawyerProfileRoutingModule } from './lawyerprofile-routing.module';
import { LawyerProfileComponent } from './lawyerprofile.component';
import { LawyeraffiliationComponent } from './lawyeraffiliation/lawyeraffiliation.component';
import { LawyerlicenseComponent } from './lawyerlicense/lawyerlicense.component';
import { LawyerspecialityComponent } from './lawyerspeciality/lawyerspeciality.component';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LawyerProfileRoutingModule,
  ],
  declarations: [LawyerProfileComponent,EditFormComponent,ListComponent, LawyeraffiliationComponent, LawyerlicenseComponent, LawyerspecialityComponent]
})
export class LawyerProfileModule { }
