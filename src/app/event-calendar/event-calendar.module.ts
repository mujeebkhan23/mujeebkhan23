import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { EventRoutingModule } from './event-calendar-routing.module';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { EventCalendarComponent } from './event-calendar.component';

@NgModule({
  imports: [EventRoutingModule, FormsModule, CommonModule],

  exports: [EventCalendarComponent],
  declarations: [
    EventCalendarComponent,
    EventFormComponent,
    EventListComponent,
    CalendarListComponent,
  ],
  bootstrap: [EventCalendarComponent],
})
export class EventModule {}
