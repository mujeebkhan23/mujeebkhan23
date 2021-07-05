import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RegisterRoutingModule,
    SweetAlert2Module,
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
