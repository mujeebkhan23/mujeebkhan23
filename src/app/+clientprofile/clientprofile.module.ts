import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientProfileComponent } from './clientprofile.component';
import { ClientProfileRoutingModule } from './clientprofile-routing.module';
import { ListComponent } from './list/list.component';
import { EditFormComponent } from './edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule,
    ClientProfileRoutingModule
  ],
  declarations: [ClientProfileComponent,EditFormComponent,ListComponent]
})
export class ClientProfileModule { }
