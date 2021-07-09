import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { EventRoutingModule } from './event-calendar-routing.module';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { EventCalendarComponent } from './event-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DemoComponent } from './demo/demo.component';
import {
  TabsModule as MkTabsModule,
  BoxModule,
  DropdownModule,
} from 'angular-admin-lte';
import { MbscModule } from '@mobiscroll/angular';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    MbscModule,
    EventRoutingModule,
    FormsModule,
    MkTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],

  exports: [EventCalendarComponent],
  declarations: [
    EventCalendarComponent,
    EventFormComponent,
    EventListComponent,
    CalendarListComponent,
    DemoComponent,
  ],
  bootstrap: [EventCalendarComponent],
})
export class EventModule {}
