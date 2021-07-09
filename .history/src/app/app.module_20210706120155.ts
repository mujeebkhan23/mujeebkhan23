import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from './service/intermsgsrv';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    CoreModule,
    Ng2SearchPipeModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule,
    MaterialBarModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    
  ],
  declarations: [AppComponent, HomeComponent],
  providers: [ MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
