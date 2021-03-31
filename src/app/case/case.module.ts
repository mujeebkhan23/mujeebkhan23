import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from 'angular-admin-lte';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { adminLteConf } from '../admin-lte.conf';
import { HomeComponent } from '../home/home.component';
import { CaseComponent } from './case.component';

import { CommonModule } from '@angular/common';




@NgModule({
  imports: [
    CommonModule,
    FormsModule ,
    

  ],
  declarations: [
  CaseComponent
  
  ],
  bootstrap: [CaseComponent]
})



export class CaseModule {}
