import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarsComponent } from './calendars.component';
import { CalendarRoutingModule } from './calendars-routing.module';

@NgModule({
  imports: [FormsModule, CommonModule, CalendarRoutingModule],
  declarations: [CalendarsComponent],
  exports: [CalendarsComponent],
})
export class CalendarsModule {}
