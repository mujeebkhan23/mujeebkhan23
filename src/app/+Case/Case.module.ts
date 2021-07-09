
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//  import { NgxTinymceModule } from 'ngx-tinymce';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { CaseRoutingModule } from './Case-routing.module';

import { CaseNatureComponent } from './case-nature/case-nature.component';

import { CaseHistoryComponent } from './case-history/case-history.component';
import { CaseScheduleComponent } from './case-schedule/case-schedule.component';
import { CaseDraftsComponent } from './case-drafts/case-drafts.component';
import { CaseInvoicesComponent } from './case-invoices/case-invoices.component';
import { CaseHeaderComponent } from './case-header/case-header.component';

import { TabsModule as MkTabsModule, BoxModule, DropdownModule } from 'angular-admin-lte';
import { PartiesComponent } from './parties/parties.component';
import { OpponentPartiesComponent } from './opponent-parties/opponent-parties.component';

import { CommonModule } from '@angular/common';
import { CaseComponent } from './Case.component';
import { OpponentLawyerComponent } from './opponent-lawyer/opponent-lawyer.component';
import { ViewscheduleComponent } from './viewschedule/viewschedule.component';
import { CaseclauseComponent } from './case-clause/caseclause.component';
import { NgxTinymceModule } from 'ngx-tinymce';
import { ViewnatureComponent } from './viewnature/viewnature.component';
import { ViewclauseComponent } from './viewclause/viewclause.component';
import { ViewhistoryComponent } from './viewhistory/viewhistory.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MkTabsModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    CaseRoutingModule,
    NgxTinymceModule.forRoot({
      baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.0/',
    }),

 
  ],
  declarations: [CaseComponent, EditComponent, ListComponent, CaseNatureComponent, CaseHistoryComponent, CaseScheduleComponent,CaseclauseComponent, CaseDraftsComponent, CaseInvoicesComponent, CaseHeaderComponent, PartiesComponent, OpponentPartiesComponent, OpponentLawyerComponent, EditComponent, ViewscheduleComponent, ViewnatureComponent, ViewclauseComponent, ViewhistoryComponent]
})
export class CaseModule { }
