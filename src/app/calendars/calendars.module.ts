import { CalendarsComponent } from './calendars.component';
import { CalendarsRoutingModule } from './calendars-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
@NgModule({
  imports: [FormsModule, CommonModule, CalendarsRoutingModule],
  declarations: [
    CalendarsComponent,
    CalendarDetailComponent,
    CalendarListComponent,
    EventFormComponent,
    EventCalendarComponent,
  ],
})
export class CalendarsModule {}
